const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
app.get("/404", (req, res) => {
  res.render("404");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username === "ameya" && password === "123456") {
    res.redirect("/dashboard");
  } else {
    res.redirect("/404");
  }
});

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
