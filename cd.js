var http = require('http');
var fs = require('fs');
var url = require('url');

function start(req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    console.log(filename.split("/"))
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}


http.createServer(start).listen(1224);
console.log("Server started !")