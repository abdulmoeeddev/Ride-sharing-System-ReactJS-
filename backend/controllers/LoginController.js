
const User = require("../models/userModels");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  loginUser,
};
