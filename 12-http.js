const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Home Page');
    res.end();
  } else if (req.url === '/about') {
    res.write('About Page');
    res.end();
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>Could not find the page</p>
  <a href="/">Back home</a>
  `);
  }
});

server.listen(4000);
