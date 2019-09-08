var fs = require('fs');

exports.enroll = function(req) {
    var body = '';
    var filename = '';
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