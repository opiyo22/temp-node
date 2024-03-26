const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Home Page1');
  }
  if (req.url == '/') {
    res.end('Here is our short History');
  }
  res.end(`<h1>Oops! page Does not Exist</h1>`);
  res.write('welcome to our home page');
  res.end();
});

server.listen(5000);
