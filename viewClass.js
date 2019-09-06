const fs = require('fs');

exports.viewClassList = function (res, string) {
    fs.readFile(string, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.writeFile('classList.csv', data, function (err) {
            if (err) throw err;
            console.log('reading data via ajax!\n' + data);
        });

    });
    fs.readFile('classList.html', function (err, data1) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end();
    });
}