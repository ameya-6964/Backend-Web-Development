const express = require('express');
const app = express();

const store = require('./routes/store');
const newProduct = require('./routes/newProduct');

app.use(express.static(__dirname))

app.use('/new_product',newProduct.route);
app.use(store);

app.listen(3000,()=>{
    console.log("Server is listening...");
})