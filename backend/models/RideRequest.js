const mongoose = require("mongoose");

const rideRequestSchema = new mongoose.Schema({
  goingfrom: String,
  goingto: String,
  passenger: Number,
  rideStatus: String,
  bookingDate: Date,
  requestStatus: String,
  bookerEmail: String,
  publisherId: String,
  bookerId: String,
  rideId: String,
});

const RideRequest = mongoose.model("RideRequest", rideRequestSchema);

module.exports = RideRequest;
