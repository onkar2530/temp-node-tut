const{createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding:'utf8'});

// reads the data in chuncks of ~64KB by default, can be configured using highWaterMark
// last buffer = remainder
stream.on('data', (chunk)=>{
    console.log(chunk);
});

stream.on('error', (err)=>{
    console.log(err);
});