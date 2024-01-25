const http = require("http");
const currentDate = new Date();
const product = {
  pcode: 10001,
  product: "Apple",
};
const date = {
  now: currentDate.toISOString(),
};

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Node Server</title></head></html>");
    res.write("<body><h1>Home Page</h1></body>");
    return res.end();
  } else if (url === "/login") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Node Server</title></head></html>");
    res.write("<body><h1>Login Page</h1></body>");
    return res.end();
  } else if (url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(product));
    return res.end();
  } else if (url === "/date") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(date));
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Node Server</title></head></html>");
  res.write("<body><h1>" + req.url + "</h1></body>");
});

server.listen(3000, () => {
  console.log("Server Started");
});
