const fs = require('fs');

module.exports = function saveLogToFile(data, file) {
    fs.writeFile(`logs/${file}.log`, data, {flag: 'a'}, err => {
        if (err) throw err;
    })
};