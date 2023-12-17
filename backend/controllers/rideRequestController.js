const RideRequest = require("../models/RideRequest");

exports.bookRide = async (req, res) => {
  try {
    const rideRequest = new RideRequest(req.body);
    await rideRequest.save();
    res.json({ message: "Ride booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getRequestedRides = async (req, res) => {
  try {
    const requestedRides = await RideRequest.find();
    res.json(requestedRides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
