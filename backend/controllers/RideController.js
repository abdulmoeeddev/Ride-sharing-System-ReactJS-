const Ride = require("../models/RideModels");

exports.publishRide = async (req, res) => {
  try {
    const { goingfrom, goingto, name, email, phone, status, passenger, date } =
      req.body;
    const ride = new Ride({
      goingfrom,
      goingto,
      name,
      email,
      phone,
      status,
      passenger,
      date,
    });
    await ride.save();
    res.status(201).json({ message: "Ride published successfully" });
  } catch (error) {
    res.status(505).json({ message: "Internal Error" });
  }
};

exports.getPublishRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.publishRides = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Assuming your Ride model has a 'status' field
    const updatedRide = await Ride.findByIdAndUpdate(
      id,
      { status },
      { new: true } // to return the updated document
    );

    if (!updatedRide) {
      return res.status(404).json({ message: "Ride not found" });
    }

    res.json({ message: "Ride status updated successfully", updatedRide });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
