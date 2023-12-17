// controllers/userController.js
const User = require("../models/userModels");

const getDrivers = async (req, res) => {
  try {
    const drivers = await User.find({ userType: "Driver" });

    if (drivers.length === 0) {
      return res.status(404).json({ message: "No drivers found" });
    }

    res.json(drivers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getDrivers,
};
