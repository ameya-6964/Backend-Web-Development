const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.end("<h1>First Server</h1>");
});

server.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
