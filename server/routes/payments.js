const express = require("express");
const crypto = require("crypto");
const razorpay = require("../utils/config");
const { buildTimeRange, generateId } = require("../utils/additionals");
const BookingQueue = require("../schemas/BookingQueuesSchema");
const Reservation = require("../schemas/ReservationsSchema");
require("dotenv").config();

const router = express.Router();

// create payment order
router.post("/create_order", async (req, res) => {
  try {
    const { amountPaid } = req.body;
    const order = await razorpay.orders.create({
      amount: amountPaid * 100,
      currency: "INR",
      receipt: `receipt_${generateId()}`,
    });
    
    return res.json(order);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server error!" });
  }
});

// create reservation (post-payment)
router.post("/table_reservation/verify", async (req, res) => {
  try {
    const {
      email,
      name,
      tables,
      date,
      time,
      amountPaid,
      members,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !email ||
      !name ||
      !date ||
      !time ||
      amountPaid === undefined ||
      members === undefined ||
      !Array.isArray(tables) ||
      tables.length === 0 ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    )
      return res.status(400).json({ msg: "Missing/invalid values!" });

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_TEST_SECRET)
      .update(body)
      .digest("hex");
    if (expectedSignature !== razorpay_signature)
      return res.status(400).json({ msg: "Payment verification failed!" });

    const { start, end } = buildTimeRange(date, time);
    const conflict = await Reservation.findOne({
      dateToVisit: date,
      tables: { $in: tables },
      startTime: { $lt: end },
      endTime: { $gt: start },
    });
    if (conflict)
      return res.status(409).json({
        status: "payment_success_but_booking_failed",
        msg: "Amount will be refunded within 24 hrs.",
      });
    const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);

    await Reservation.create({
      email,
      name,
      tables,
      dateToVisit: date,
      timeToVisit: time,
      startTime: start,
      endTime: end,
      totalMembers: members,
      paymentData: {
        paymentId: razorpay_payment_id,
        bookingId: razorpay_order_id,
        amountPaid,
        modeOfPayment: paymentDetails.method,
      },
    });
    await BookingQueue.findOneAndDelete({
      baseTable: tables[0],
      choosedBy: email,
    });
    return res.json({
      status: "ok",
      msg: "Reservation confirmed",
      bookingId: razorpay_order_id,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server error!" });
  }
});

module.exports = router;
