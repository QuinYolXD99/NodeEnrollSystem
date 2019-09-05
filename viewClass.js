const fs = require('fs');

exports.viewClassList = function (res,string) {
    fs.readFile(string, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    });
}