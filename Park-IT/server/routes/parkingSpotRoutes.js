// routes/parkingSpotRoutes.js
const express = require("express");
const parkingSpotController = require("../controllers/parkingSpotController");

const router = express.Router();

router.post("/create", parkingSpotController.createSpot);
router.put("/update/:spotId", parkingSpotController.updateSpot);
router.get("/all", parkingSpotController.getAllSpots);
router.get("/:spotId", parkingSpotController.getSpotById);

module.exports = router;
