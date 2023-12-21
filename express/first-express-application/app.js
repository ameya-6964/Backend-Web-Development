//! express is not built in module for Creating s=wen Servers
const express = require("express");

//! For Using Methods Of Express (naming convnetions)
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    `<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a> `
  );
});
app.get("/contact", (req, res) => {
  res.send(`<h1>Contact Us Page</h1>`);
});
app.get("/about", (req, res) => {
  res.send(`<h1>About Us Page</h1>`);
});

//! NOTE :- Error Page Should Be At Last Order
app.get("*", (req, res) => {
  res.send(
    `<h1 style="color:red">Error Invalid URL</h1> <a href="/">Go To Home Page</a>`
  );
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
