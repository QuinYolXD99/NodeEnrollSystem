const fs = require('fs');

exports.viewClassList = function (res, string) {
    fs.readFile(string, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.writeFile('./Class/classList.csv', data, function (err) {
            if (err) throw err;
        });

    });
    fs.readFile('./classList.html', function (err, data1) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data1);
    });
}