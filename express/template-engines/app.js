const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/user/:id/:username", (req, res) => {
  let userId = req.params.id;
  let userName = req.params.username;
  res.render("index", { id: userId, username: userName });
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
