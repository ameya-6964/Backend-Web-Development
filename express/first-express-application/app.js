//! express is not built in module for Creating s=wen Servers
const express = require("express");

//! For Using Methods Of Express (naming convnetions)
const app = express();
const PORT = 3000;
const data = {
  pCode: 1001,
  pName: "Apple",
  price: 20,
};

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Node Express Server</title></head>");
  res.write("<body><h1>Responding To The Request</h1>");
  res.write("<h1>URL : " + req.url + "</h1>");
  res.write("</body></html>");
  return res.end();
});
//! ? Denotes Wild Card Character
app.get("/products?", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Node Express Server</title></head>");
  res.write("<h1>Welcome To Product Route</h1>");
  res.write("<h1>URL : " + req.url + "</h1>");
  res.write("</body></html>");
  return res.end();
});

app.get("/user/:userId/:userName", (req, res) => {
  res.write("<h1>" + req.params.userId + "</h1>");
  res.write("<h1>" + req.params.userName + "</h1>");
  res.end();
});

app.get("/data", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
  return res.end();
});

//! NOTE :- Error Page Should Be At Last Order
app.get("*", (req, res) => {
  res.send(
    `<h1 style="color:red">Error Invalid URL</h1> <a href="/">Go To Home Page</a>`
  );
});

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
