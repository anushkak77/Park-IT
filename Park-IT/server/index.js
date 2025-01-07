// const express = require('express');
// const app = express();

// const database = require('./config/database');
// const cookieParser = require('cookie-parser');
// const cors = require('cors'); //backened entertain the front request
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/User');




// dotenv.config();
// const PORT = process.env.PORT || 4000;





// //database connect
// database.connect();
// //middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         credentials: true,
//     })
// )

// app.use("/api/v1/auth", userRoutes);

// //default route
// app.get("/", (req, res) => {
//     return res.json({
//         success: true,
//         message: "Server is up and running..."
//     });
// });

// app.listen(PORT, () => {
//     console.log(`App is running at ${PORT}`);
// })




const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");
const userRoutes = require("./routes/User");
const parkingSpotRoutes = require("./routes/parkingSpotRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
database.connect(); // Assuming `database.connect` is correctly implemented in `./config/database`

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from React frontend
    credentials: true,
  })
);

// Routes
app.use("/api/v1/auth", userRoutes); // User-related routes
app.use("/api/parking-spots", parkingSpotRoutes); // Parking spot-related routes

// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Server is up and running...",
  });
});

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/parkingSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
