module.exports = function logSubredditSuccess(url, date, callback) {
    callback(date + ' ' + url + '\n', 'access');
};