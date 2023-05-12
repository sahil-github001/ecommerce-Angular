// import mongoose
const mongoose = require('mongoose');

// Define the connection string
// mongoose.connect('mongodb://localhost:27017/cart', () => {
//     console.log('connected to mongodb');
// });

mongoose.connect("mongodb://0.0.0.0:27017/cart", {
    useNewUrlParser:true
});

// Create a model for the products
const Product = mongoose.model('products', {
    // Schema creation
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
});

const Wishlist = mongoose.model('wishlist', {
    id: Number,
    title: String,
    price: Number,
    image: String,
    description: String
})

module.exports = {
    Product,
    Wishlist
} 