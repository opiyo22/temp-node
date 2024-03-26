const path = require('path');

const filepath = path.join('/content', 'subfolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);
