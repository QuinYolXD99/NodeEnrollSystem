var fs = require('fs');
var http = require('http')


http.createServer(function (req, res) {
  var body = '';
  var filename = '';

  res.writeHead(200, {
    'Context-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });

  req.on('data', function (data) {
    data = JSON.parse(data);
    body = data.name;
    filename = data.subject+'.txt';
  });

  req.on('end', function (err) {
    fs.appendFile("subjects/"+filename, body+"\n");
  })

}).listen(1224);
console.log('Server running');