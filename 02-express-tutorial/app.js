const express = require('express');
const app = express();

// req => middleware => res
// 3rd appraoch of moving the logger into a separate logger.js
// for modularity
const logger = require('./logger');

// we can avoid adding logger to app.get
// add it to app resource
app.use(logger);

// 2nd approach of moving the logger in a separate function
// app.js becomes cluttered

// const logger = (req, res, next)=>{
//     console.log(req.method, req.url, new Date().toISOString());
//     next();
// }

app.get('/', (req, res)=>{
    // 1st approach -> incline logger in every GET
    // leads to code duplication

    // const method = req.method;
    // const url = req.url;
    // const time = new Date().toISOString();
    // console.log(method, url, time);

    res.send("Home");
})

app.get('/about', (req, res)=>{
    res.send("About");
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource not found");
})

app.listen(5000, ()=>{
    console.log("listening on 5000...");
})