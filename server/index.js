// import express
const express = require('express');

// import cors
const cors = require('cors');

// import dataServices
const dataServices = require('./service/dataServices');

// create an application using express
const app = express();

// Use json parser for server responce(to convert)
app.use(express.json());

// Using cors specify the origin to the server
app.use(cors({
    origin: 'http://localhost:4200'
}));

// setup a port number
app.listen(3000, () => {
    console.log('listening to port : 3000');
});

// API call to get all product
app.get('/all-products', (req, res) => {
    dataServices.getProducts().then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

// API call to  addTo wishlist
app.post('/addToWishlist', (req, res) => {
    dataServices.addToWishlist(req.body.id, req.body.title, req.body.price, req.body.image, req.body.description).then(
        (result) => {
            res.status(result.statusCode).json(result);
        }
    )
})

// API call to get wishlist
app.get('/getWishlist', (req, res) => {
    dataServices.getWishlist().then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

// call to delete wishlist
app.delete('/deleteWishlist/:id', (req, res) => {
    dataServices.deleteWish(req.params.id).then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

