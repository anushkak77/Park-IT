// controllers/parkingSpotController.js
const ParkingSpot = require("../models/ParkingSpot");

// Create a new parking spot
exports.createSpot = async (req, res) => {
  try {
    const { spotId, location, spotSize, pricePerHour, verificationId } = req.body;

    // Check for duplicate spotId
    const existingSpot = await ParkingSpot.findOne({ spotId });
    if (existingSpot) {
      return res.status(400).json({ message: "Spot ID already exists" });
    }

    const newSpot = new ParkingSpot({
      spotId,
      location,
      spotSize,
      pricePerHour,
      verificationId,
    });

    await newSpot.save();
    res.status(201).json({ message: "Parking spot created successfully", spot: newSpot });
  } catch (error) {
    res.status(500).json({ message: "Error creating parking spot", error: error.message });
  }
};

// Update an existing parking spot
exports.updateSpot = async (req, res) => {
  try {
    const { spotId } = req.params;
    const updates = req.body;

    const updatedSpot = await ParkingSpot.findOneAndUpdate({ spotId }, updates, { new: true });
    if (!updatedSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    res.status(200).json({ message: "Parking spot updated successfully", spot: updatedSpot });
  } catch (error) {
    res.status(500).json({ message: "Error updating parking spot", error: error.message });
  }
};

// Get all parking spots
exports.getAllSpots = async (req, res) => {
  try {
    const spots = await ParkingSpot.find();
    res.status(200).json(spots);
  } catch (error) {
    res.status(500).json({ message: "Error fetching parking spots", error: error.message });
  }
};

// Get a single parking spot by ID
exports.getSpotById = async (req, res) => {
  try {
    const { spotId } = req.params;

    const spot = await ParkingSpot.findOne({ spotId });
    if (!spot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    res.status(200).json(spot);
  } catch (error) {
    res.status(500).json({ message: "Error fetching parking spot", error: error.message });
  }
};
