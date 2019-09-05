var http = require('http');
var api = require("./enroll")
var url = require('url');
var fs = require('fs');
var viewClass = require('./viewClass')


http.createServer(function (req, res) {
  var response = "0";
  var dir = url.parse(req.url, true);
  var path = dir.pathname;
  res.writeHead(200, {
    'Context-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });

  if (path == "/" || path == "index.html") {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

  } else if (path.split("/")[1] == "enroll") {

    if (api.enroll(req) == true) {
      res.end("1");
    }

  } else if (path.split("/")[1] == "class") {
    var string = path.split("/")[2] + ".csv";
    fs.readFile(string, function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      if (data == undefined) {
        res.write("Not Found!");
        res.end()
      } else {
        viewClass.viewClassList(res,string)
      }
    });
  }

}).listen(1224);
console.log('Server running');