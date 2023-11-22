const path = require('path');

console.log(path.sep);
//returns normalized path, extra // dont matter
const filePath = path.join('/content', '//subfolder', 'test.txt');

console.log(filePath);
console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);