//! Creating Server With Core Http Module
const http = require("http");
const casual = require("casual");

const port = 3000;
const sentence = casual._sentence();
console.log(sentence);

const server = http.createServer((req, res) => {
  res.end(`<h1>${sentence}</h1>`);
});

server.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
