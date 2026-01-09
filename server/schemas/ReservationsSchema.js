const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  bookingId: {
    type: String,
  },
  paymentId: {
    type: String,
  },
  amountPaid: {
    type: Number,
  },
  modeOfPayment: {
    type: String,
  },
  _id: 0,
});
const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tables: {
    type: [String],
    required: true,
  },
  totalMembers: {
    type: Number,
    required: true,
  },
  dateToVisit: {
    type: String,
    required: true,
  },
  timeToVisit: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  paymentData: PaymentSchema,
});

module.exports = mongoose.model("Reservations", ReservationSchema);
