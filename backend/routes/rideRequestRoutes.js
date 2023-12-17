const express = require("express");
const router = express.Router();
const rideRequestController = require("../controllers/rideRequestController");

router.post("/requestride", rideRequestController.bookRide);
router.get("/requestride", rideRequestController.getRequestedRides);
module.exports = router;
