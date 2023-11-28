const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    // not good to send large files over network
    //const data = fs.readFileSync('./content/bigger.txt', 'utf8');
    const stream = fs.createReadStream('./content/bigger.txt', 'utf8');
    stream.on('open', ()=>{
        //pushes the data from readStream to response
        // response object is set to writable under the hood
        stream.pipe(res);
    });

    stream.on('error', (err)=>{
        res.end(err);
    });
}).listen(5000);