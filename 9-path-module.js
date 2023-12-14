const path = require('path')

console.log(path.sep);

var filePath = path.join('content', 'subFolder', 'test.txt')
console.log(filePath)

var base = path.basename(filePath)
console.log(base)

var absolute = path.resolve('content', 'subFolder', 'test.txt')
console.log(absolute)