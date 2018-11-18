const fs = require('fs');
const path = require('path');

module.exports = function loadView(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(`${path.resolve(__dirname, '../views')}/${file}.html`, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
};