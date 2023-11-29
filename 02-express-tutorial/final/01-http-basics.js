const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/plain'});
        res.write("<h1>HOME PAGE</h1>");
        res.end();
    }else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>ABOUT PAGE</h1>");
        res.end();
    } else{
        res.writeHead(404, {'content-type':'text/json'});
        res.write("<h1>ERROR</h1>");
        res.end();
    }
}).listen(5000, ()=>{
    console.log("listening to 5000");
})
