const fs = require('fs');
var viewClass = require('./viewClass');

exports.returnClass = function (res,string) {
    fs.readFile(string, function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        if (data == undefined) {
          res.write("Not Found!");
          res.end()
        } else {
          viewClass.viewClassList(res, string)
        }
      });
}