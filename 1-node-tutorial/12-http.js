const http = require('http');
const server = http.createServer((rq, rs)=>{
    if(rq.url === '/'){
        rs.end("Welcome to my home qpage");
    }
    else if(rq.url === '/about'){
        rs.end("our about section");
    }
    else{
        rs.end(`
    <h1>Ooops!!</h1>
    <p>We did not find what you are looking for.</p>
    <a href="/">Back Home</a>
    `);
    }
    
});

server.listen(5001);