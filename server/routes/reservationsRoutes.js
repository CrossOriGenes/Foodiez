const express = require("express");
const { buildTimeRange } = require("../utils/additionals");
const BookingQueue = require("../schemas/BookingQueuesSchema");
const Reservation = require("../schemas/ReservationsSchema");

const router = express.Router();

// create ttl on table select by existing check
router.post("/create_ttl", async (req, res) => {
  try {
    const { email, baseTable, selectedTables } = req.body;
    if (!email || !baseTable || selectedTables.length === 0)
      return res.status(400).json({ msg: "Improper/null values!" });

    const exists = await BookingQueue.findOne(
      { baseTable },
      { baseTable: 1, choosedBy: 1 }
    );
    if (exists)
      return res.status(400).json({
        status: "pending",
        msg: "Pending request!",
        data: exists,
      });
    await BookingQueue.create({
      baseTable,
      selectedTables,
      choosedBy: email,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), //  5 mins
    });

    return res.json({ status: "confirmed", msg: "Seat locked successfully🔒" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server Error!" });
  }
});

// update selectedTables array only for existing ttl
router.patch("/update_ttl", async (req, res) => {
  try {
    const { email, selectedTables } = req.body;
    if (!email || selectedTables.length === 0)
      return res.status(400).json({ msg: "Improper/null values!" });

    const result = await BookingQueue.findOneAndUpdate(
      { choosedBy: email },
      { $set: { selectedTables } }
    );
    if (!result.isModified)
      return res
        .status(400)
        .json({ status: "failed", msg: "Tables set not updated" });

    return res.json({ status: "ok", msg: "Tables updated" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server Error!" });
  }
});

// verify if record exists in TTL at the time of payment verification
router.post("/check_ttl", async (req, res) => {
  try {
    const { email, selectedTables } = req.body;
    if (!email || selectedTables.length === 0)
      return res.status(400).json({ msg: "Improper/null values!" });

    const exists = await BookingQueue.findOne({ choosedBy: email });
    if (!exists)
      return res
        .status(400)
        .json({ status: "failed", msg: "Combination Expired!" });

    const same =
      exists.selectedTables.length === selectedTables.length &&
      exists.selectedTables.every((t) => selectedTables.includes(t));
    if (!same)
      return res
        .status(400)
        .json({ status: "failed", msg: "Tables selection mismatch!" });

    return res.json({
      status: "ok",
      msg: "Verification Successful",
      data: exists,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server Error!" });
  }
});

// get reserved tables for a particular date & time
router.get("/booked_tables", async (req, res) => {
  try {
    const { date, time } = req.query;
    if (!date || !time)
      return res.status(400).json({ msg: "Missing parameters!" });

    const { start, end } = buildTimeRange(date, time);
    const conflicts = await Reservation.find({
      dateToVisit: date,
      startTime: { $lt: end },
      endTime: { $gt: start },
    }).select("tables");
    const bookedTables = [...new Set(conflicts.flatMap((r) => r.tables))];

    return res.json({
      status: "ok",
      bookedTables,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server error!" });
  }
});

// get reservation details
router.get("/get_reservation_details", async (req, res) => {
  try {
    const { bookingId } = req.query;
    if (!bookingId)
      return res
        .status(400)
        .json({ status: "failed", msg: "Missing order-Id!" });

    const data = await Reservation.findOne(
      { "paymentData.bookingId": bookingId },
      {
        name: 1,
        dateToVisit: 1,
        timeToVisit: 1,
        tables: 1,
        totalMembers: 1,
        "paymentData.amountPaid": 1,
        "paymentData.paymentId": 1,
      }
    );
    if (!data)
      return res
        .status(400)
        .json({ status: "failed", msg: "Data doesn't exits!" });

    return res.json({ status: "ok", msg: "Data fetched", reservation: data });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Server error!" });
  }
});

module.exports = router;
