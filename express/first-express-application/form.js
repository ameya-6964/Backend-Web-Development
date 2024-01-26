const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Data Form</title></head>");
    res.write(`<body><form action="/data" method="POST">`);
    res.write(`<input type="text" name="code" />`);
    res.write(`<input type="text" name="product" />`);
    res.write("<button>Submit</button> </form>");
    res.write("<h3>" + req.url + "</h3>");
    res.write("</body></html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Data Form</title></head>");
  res.write(`<body> `);
  res.write("<h1>" + req.url + "</h1>");
  res.write("</body></html>");
  return res.end();
});

server.listen(3000, () => {
  console.log("Server Started");
});
