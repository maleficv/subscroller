module.exports = function logSubredditSuccess(url, ip, date, callback) {
    callback(date + ' ' + ip + ' ' + url + '\n', 'access');
};