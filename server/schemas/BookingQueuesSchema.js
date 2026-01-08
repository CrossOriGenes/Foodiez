const mongoose = require("mongoose");

const BookingQueueSchema = new mongoose.Schema({
  baseTable: {
    type: String,
    required: true,
  },
  selectedTables: {
    type: [String],
    required: true,
  },
  choosedBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

BookingQueueSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const BookingQueue = mongoose.model("BookingQueue", BookingQueueSchema);

module.exports = BookingQueue;
