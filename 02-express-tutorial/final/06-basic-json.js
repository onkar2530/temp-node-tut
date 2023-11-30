const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.json(products);
});

app.all('*', (req, res)=>{
    res.status(404).send("<h1>Resource doesnt exist</h1>");
});

app.listen(5000, ()=>{
    console.log("server is up on port 5000...");
})
  console.log('Server is listening on port 5000....')
})
