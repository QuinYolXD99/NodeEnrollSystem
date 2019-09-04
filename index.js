var fs = require('fs');
var http = require('http')


http.createServer(function (req, res) {
  var body = '';
  var filename = '';

  res.writeHead(200, {
    'Context-Type': 'text/plain'
  });
// whenever the server receives data from request // it reads the data  JSON.parse convert the string data to JSON or object
  req.on('data', function (data) {
    data = JSON.parse(data);
    body = data.name;
    filename = data.subject+'.txt';
  });
// When the data is read the server create a file using the fs module
  req.on('end', function () {
    fs.appendFile("subjects/"+filename, body+"\n");
  })

}).listen(1224);
console.log('Server running');