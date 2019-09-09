//this module is use to  save the student information to the csv
var fs = require('fs');

exports.enroll = function(req) {
    var body = '';
    var filename = '';
    // whenever the request received a data this function will be triggered
    req.on('data', function (data) {
        data = JSON.parse(data);
        body = data.name +","+data.email+","+data.course+" - "+data.year;
        filename = data.subject.toLowerCase().replace(" ","-") + '.csv';
    });
    // When the data is read the server create a file using the fs module
    req.on('end', function () {
        fs.appendFile("./Class/"+filename, body+"\n", function (err) {
            if (err) {
                return false;
            }
            console.log('Saved!');
        });
    })
    return true;
}