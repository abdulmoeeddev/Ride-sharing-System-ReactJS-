const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
    },
    userName: {
      type: String,
      required: [true, "Please provide username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },

    fullName: {
      type: String,
      required: [true, "Please provide full name"],
    },

    userType: {
      type: String,
      required: true,
      enum: ["Admin", "Driver", "Passenger"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
