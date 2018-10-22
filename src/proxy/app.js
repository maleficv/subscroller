const http = require('http');
const https = require('https');

const port = process.env.PORT || 9005;

http.createServer(async (req, res) => {
    const url = req.url
        .substr(2, req.url.length)
        .split('url=')[1];

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (!url) {
        return res.end('<h1>Welcome to subreddit proxy-app.</h1><br><a href="http://localhost:9005/?url=https://www.reddit.com/r/wallpapers/new.json?limit=6&after=">Example</a>');
    }
    const data = await getApi(url);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
}).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

function getApi(url) {
    return new Promise((resolve, reject) => {
        let body = '';

        https.get(url, res => {
            res.on('data', chunk => {
                body += chunk;
            });

            res.on('end', () => {
                resolve(body);
            });

            res.on('error', (err) => {
                reject(err);
            });
        });
    })
}