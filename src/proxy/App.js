const http = require('http');
const moment = require('moment');

const getApi = require('./services/getApi');
const logServerEvent = require('./actions/logServerEvent');
const logSubredditSuccess = require('./actions/logSubredditSuccess');
const logSubredditNotFound = require('./actions/logSubredditNotFound');
const saveLogToFile = require('./actions/saveLogToFile');
const loadView = require('./actions/loadView');
const isDev = require('./helpers/isDev');

const port = process.env.PORT || 9005;

const server = http.createServer(async (req, res) => {
    const url = req.url
        .substr(2, req.url.length)
        .split('url=')[1];
        
    const ip = req.headers['x-real-ip'] || req.headers['X-Real-IP'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (!url) {
        const view = await loadView('index');
        return res.end(view);
    }
    try {
        const data = await getApi(url);

        !isDev() && logSubredditSuccess(url, ip, moment().format('YYYY/MM/DD hh:mm:ss'), saveLogToFile);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    } catch (error) {
        !isDev() && logSubredditNotFound(url, moment().format('YYYY/MM/DD hh:mm:ss'), saveLogToFile);

        res.writeHead(404);
        res.end();
    }
});

server.on('error', error => {
    !isDev() && logServerEvent(error, moment().format('YYYY/MM/DD hh:mm:ss'), saveLogToFile);
});

server.listen(port, () => {
    if (isDev()) {
        return console.log(`Server listening on port ${port}`);
    }
    !isDev() && logServerEvent(port, moment().format('YYYY/MM/DD hh:mm:ss'), saveLogToFile);
});

process.on('uncaughtException', () => {
    !isDev() && logServerEvent('process error occurred', moment().format('YYYY/MM/DD hh:mm:ss'), saveLogToFile);
});