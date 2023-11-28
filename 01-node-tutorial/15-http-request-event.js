const http = require('http');

// traditional approach to create http server
// const server = http.createServer((req, res)=>{
//     res.end('Welcome');
// });

//Using Event Emitter api

const server = http.createServer();

server.on('request', (req, res)=>{
    res.end('Welcome');
});

server.listen(5000, ()=>{
    console.log('listening on 5000');
})