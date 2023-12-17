const express = require("express");
const router = express.Router();
const rideController = require("../controllers/RideController");

router.post("/publishride", rideController.publishRide);
router.get("/publishride", rideController.getPublishRides);
router.put("/publishride/:id", rideController.publishRides);

module.exports = router;
