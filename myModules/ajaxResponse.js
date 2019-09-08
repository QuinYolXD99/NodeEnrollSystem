const fs = require('fs');

exports.ajaxResponse = function (res) {

    fs.readFile("Class/classList.csv", function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        data = "" + data
        res.end("" + data.trimRight());
    });
}