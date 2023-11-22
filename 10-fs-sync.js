// const fs = require('fs');
// const readFileSync = fs.readFileSync()

//above is same as below, destructure right away
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//writeFileSync('./content/result.txt', `${first}, ${second} `)


//to append to file
writeFileSync('./content/result-sync.txt', `${first}, ${second} `, {flag:'a'});

console.log('done with the task');
console.log('starting the next one');