module.exports = function logServerEvent(port, date, callback) {
    callback(`${date} server started on ${port}`, 'server');
};