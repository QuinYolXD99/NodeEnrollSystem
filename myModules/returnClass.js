// this module is to check if the url subject is on the sever or not ; ex localhost/class/subject
var fs = require('fs');
var viewClass = require('./viewClass');

exports.returnClass = function (res,string) {
    fs.readFile(string, function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        if (data == undefined) {
          res.write("Not Found!");
          res.end()
        } else {
          // it will call the view class funtion from viewClass module
          viewClass.viewClassList(res, string)
        }
      });
}