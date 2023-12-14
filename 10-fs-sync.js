const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync("./content/first.txt", 'utf8')
const secondFile = readFileSync("./content/second.txt", 'utf8')

console.log(firstFile, secondFile);

writeFileSync('./content/result-sync.txt', `Result is : ${firstFile}, ${secondFile}`, {flag: 'a'})

