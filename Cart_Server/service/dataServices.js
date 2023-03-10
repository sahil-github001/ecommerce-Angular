// import db
const db = require('./db');

// Get all product details from db
const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            } else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Products not found'
                }
            }
        }
    )
}

// addto wishlist details store to db
const addToWishlist = (id, title, price, image, description) => {
    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Product already added..'
                }
            }
            else {
                const newProduct = new db.Wishlist({
                    id, title, price, image, description
                })
                newProduct.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: 'Product added successfully'
                }
            }
        }
    )
}

// Get wishlist product
const getWishlist = () => {
    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 406,
                    message: 'Wishlist is Empty'
                }
            }
        }
    )
}

const deleteWish = (id) => {
    return db.Wishlist.findOneAndDelete({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message: 'Product removed successfully'
                }
            }
            else {
                return {
                    status: true,
                    statusCode: 402,
                    message: 'Product Not Found'
                }
            }
        }
    )
}




module.exports = {
    getProducts,
    addToWishlist,
    getWishlist,
    deleteWish
}