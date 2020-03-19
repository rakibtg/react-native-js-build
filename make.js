const fs = require('fs-extra');
const filePath = __dirname + '/build.min.js';
const js = fs.readFileSync(filePath, 'utf-8');
const json = 'module.exports = ' + JSON.stringify(js) + ';';
fs.writeFileSync(__dirname + '/build.rn.js', json);

console.log('Done!')