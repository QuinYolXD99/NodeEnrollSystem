// this module will load the html file with the data table 
var fs = require('fs');
exports.viewClassList = function (res, string) {
    // first it will read the file in the subject url  
    fs.readFile(string, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // next it will duplicate the data from the subject url csv and  make a file classList.csv and paste the content inside 
        fs.writeFile('./Class/classList.csv',string.split('/')[1].split(".")[0]+"\n"+ data, function (err) {
            if (err) throw err;
        });
    });
    // it will render the html table file , this file will send an ajax request whenever it is loaded
    fs.readFile('classList.html', function (err, htmlData) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlData);
    });
}
