const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>")
});

app.get('/api/products',(req,res)=>{
    console.log(req.query);
    const{search,limit} = req.query;
    let newProducts = [...products];
    if(search){
        newProducts = newProducts.filter((product)=> {
            return product.name.startsWith(search);
        });
    }
    if(limit){
        newProducts = newProducts.slice(0, Number(limit));
    }
    if(newProducts.length < 1){
        return res.json({'status':200, 'msg':'no products matched the query'});
    }
        //we dont want to send all product fields
        newProducts = newProducts.map((product)=>{
            const {id, name, image} = product;
            return {id, name, image};
        })
        res.json(newProducts);
    
});

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID));
    if(!singleProduct){
        res.status(404).send("<h1>Resource doesnt exist</h1>");
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send("hello world");
});

app.all('*', (req, res)=>{
    res.status(404).send("<h1>Resource doesnt exist</h1>");
});

app.listen(5000, ()=>{
    console.log("server is up on port 5000...");
})