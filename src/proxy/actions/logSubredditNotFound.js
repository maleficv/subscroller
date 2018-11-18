module.exports = function logSubredditNotFound(url, date, callback) {
    callback(date + ' ' + url + '\n', 'error');
};