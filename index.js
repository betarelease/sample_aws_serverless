var time = require('time');
const HOST = process.env['HOST'];
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: HOST + ' The time in Mountain View is: ' + currentTime.toString(),
    });
};
