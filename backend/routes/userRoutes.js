const express = require("express");

const router = express.Router();
const register = require("../controllers/RegisterController");
const login = require("../controllers/LoginController");
const drvier = require("../controllers/DriverController");

router.post("/signup", register.signUp);
router.post("/login", login.loginUser);
router.get("/users/register", drvier.getDrivers);
router.put("/update/:id", register.updateUser);

module.exports = router;
