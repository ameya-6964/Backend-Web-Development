const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
