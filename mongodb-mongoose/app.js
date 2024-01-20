const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_LOCAL_URI)
  .then(console.log(`DATABASE CONNECTED `));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
