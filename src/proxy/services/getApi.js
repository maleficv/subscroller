const https = require('https');

module.exports = function getApi(url) {
    return new Promise((resolve, reject) => {
        let body = '';

        https.get(url, res => {
            res.on('data', chunk => {
                body += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(res.statusCode);
                }
            });

            res.on('error', (err) => {
                reject(err);
            });
        });
    })
};