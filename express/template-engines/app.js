const express = require("express");

const app = express();
const port = 3000;

app.get("/user/:id/:username", (req, res) => {
  let userId = req.params.id;
  let userName = req.params.username;
  res.render("index.ejs", { id: userId, username: userName });
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
