const express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employees");
require("dotenv").config();

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Connect to the database
mongoose
  .connect(process.env.DB_LOCAL_URI)
  .then(() => {
    console.log(`DATABASE CONNECTED`);
  })
  .catch((error) => {
    console.error(`DATABASE CONNECTION ERROR: ${error}`);
  });

// Set views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use employeeRoutes for handling employee-related routes
app.use(employeeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
