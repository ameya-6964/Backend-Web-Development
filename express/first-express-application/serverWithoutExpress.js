const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Node Server</title></head></html>");
    res.write("<body><h1>Hello</h1></body>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server Started");
});
