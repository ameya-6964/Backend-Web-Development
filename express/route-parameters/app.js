const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/questions/:id/:title", (req, res) => {
  res.send("This Route Handles All Questions");
});

app.get("/users/:id/:username", (req, res) => {
  let user = req.params.username;
  let id = req.params.id;
  res.send(`<h1>Welcome ${user} </h1> <h1> Your User Id Is ${id} </h1>`);
});

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
