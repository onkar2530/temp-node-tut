const path = require('path');
const express = require('express');
const app = express();

//a directory to place static resources
app.use(express.static('./public'));

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './navbar-app/index.html'));
});

app.get('/about', (req, res)=>{
    res.status(200).send("About Page");
});

app.all('*', (req, res)=>{
    res.status(404).send("<h1>Error</h1>");
});

app.listen(5000, ()=>{
    console.log("listening to 5000 port");
});