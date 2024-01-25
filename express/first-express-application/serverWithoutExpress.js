const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Set content type to JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    // Send JSON response
    res.end(JSON.stringify({ message: "Request Received" }));
  }
});

server.listen(3000, () => {
  console.log("Server Started");
});
