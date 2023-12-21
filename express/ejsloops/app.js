const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/questions", (req, res) => {
  let questions = [
    {
      title: "What is Node.js",
      user: "Ameya",
      votes: "10",
    },
    {
      title: "What is Mongo.db",
      user: "Ameya",
      votes: "5",
    },
    {
      title: "What is Express.js",
      user: "John",
      votes: "8",
    },
    {
      title: "What is EJS",
      user: "Mike",
      votes: "5",
    },
  ];
  res.render("index", { questions: questions });
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
