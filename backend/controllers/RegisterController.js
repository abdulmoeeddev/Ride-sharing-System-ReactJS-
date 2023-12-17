const User = require("../models/userModels");
const mongoose = require("mongoose");

const signUp = async (req, res) => {
  const newUser = req.body;
  try {
    await User.create({
      email: newUser.email,
      userName: newUser.userName,
      fullName: newUser.fullName,
      password: newUser.password,
      userType: newUser.userType,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  try {
    // Check if userId is valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    // Check if userId exists
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // You may want to add additional validation or security checks here

    // Update the user
    await User.findByIdAndUpdate(userId, updatedUser);
    res.json("User updated successfully");
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = {
  signUp,
  updateUser,
};
