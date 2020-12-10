// app.js
const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + (req.url === '/' ? '/index.html' : req.url), function (err,data) {
    console.log(req.url);
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT || 8080);
