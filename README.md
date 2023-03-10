# ShopLift Ecommerce Webpage

ShopLift is an ecommerce webpage built with Angular, Bootstrap, Node.js, Express, and MongoDB. It allows users to search for products, add them to their wishlist or cart, and checkout.

## Features

- Header component: The header contains a search bar where users can search for products. It also has two buttons for wishlist and cart.
- Product component: The product component displays all products in a card format. Each card shows the image, category, price, rating, and two buttons to add the product to the wishlist or cart.
- Wishlist component: The wishlist component displays all products added to the wishlist. Users can remove a product from the wishlist or add it to the cart from this component.
- Cart component: The cart component displays all products added to the cart. Users can clear all items from the cart and proceed to checkout. The checkout button opens a modal where users can input their address details (no backend logic implemented).
- MongoDB database: The product details are stored in a MongoDB database.

## How to Use

### Frontend

1. Clone the project from GitHub.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the development server.
4. Open your web browser and navigate to `http://localhost:4200/` to view the webpage.

### Backend

1. Clone the project from GitHub.
2. Run `npm install` to install dependencies.
3. Make sure that MongoDB is installed and running on your machine.
4. Create a new database named `cart` and a new collection named `products` in MongoDB.
5. Open the `db.json` file located in the backend directory of the project.
6. Insert the contents of the `db.json` file into the `products` collection in MongoDB.
8. To start server run `node index.js`.


