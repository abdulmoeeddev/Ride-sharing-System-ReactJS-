const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    goingfrom: {
      type: String,
      required: true,
    },
    goingto: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    passenger: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
