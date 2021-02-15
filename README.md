
# NodeJs guide

This is project to practice working with nodejs.

The project use `mongodb` databases.
Saves user data in server-side `session` to mongodb database.
`Hides menu` items for `unauthorized users`. 
We store all user `data in sessions`.
`Encrypts the password` before saving to the database. Uses `tokens` to protect data submission `forms`.`Displays error messages` to the user on the page.
It is possible to `change the password` for a registered user.The login form has a `button` to `change the password`. A `link` to `change the password` will be `sent to the email` by which the user is registered.
All input forms are `validated`
`Uploading files` for products on the site and saving to `images` folder, as well as deleting them with the product. Create an Invoice `PDF file` from the shopping cart and saving to `data/invoices` folder.
`Pagination` for `products`. Shows no more than two products on one page, scatters the rest on pages
`Pay from cart` goes through the [Stripe](https://stripe.com/) payment system.
All http requests will be saved to the `access.log` file.
All settings are saved to file `nodemon.json`

You can find a live example of a site on [heroku-exapmple](https://node-guide-dev.herokuapp.com/) if it still works of course.



## Install
* Install all packages  `npm i`
* Create table `shop` in mongodb before starting
* Save connect settings in `nodemon.json`


## Available Scripts
In the project directory, you can run:
* `npm run start` start project in development mode
* `npm run start-server` start project in production mode

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Built With
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - is a secured way to store passwords in my database regardless of whatever language my app’s backend
* [body-parser](https://github.com/expressjs/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [compression](https://github.com/expressjs/compression) - is a middleware will attempt to compress response bodies for all request that traverse through the middleware.
* [connect-flash](https://github.com/jaredhanson/connect-flash) - is a special area of the session used for storing messages.
* [connect-mongodb-session](https://github.com/mongodb-js/connect-mongodb-session) - MongoDB-backed session storage for connect and Express. Used to store sessions in MongoDB.
* [csurf](https://github.com/expressjs/csurf) - is a middleware for CSRF token creation and validation.
* [ejs](https://github.com/mde/ejs) - html template engine
* [express](https://expressjs.com/ru/) - minimal and flexible Node.js web application framework
* [express-session](https://github.com/expressjs/session) - The data is stored on the server, and the client-side session ID is in a cookie. Moreover, `express-session` uses the `cookie-parser` by default to parse `cookies`.
* [express-validator](https://express-validator.github.io/docs/) - is a set of express.js middlewares that wraps [validator.js](https://github.com/validatorjs/validator.js) validator and sanitizer functions.
* [helmet](https://helmetjs.github.io/) - secure Express apps by setting various HTTP headers
* [nodemon](https://nodemon.io/) - monitor for any changes in your source and automatically restart your server
* [mongoose](https://mongoosejs.com/) -  is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
* [morgan](https://github.com/expressjs/morgan) - middleware for handling `multipart/form-data`, which is primarily used for uploading files
* [multer](https://github.com/expressjs/multer) - HTTP request logger middleware
* [nodemailer](https://nodemailer.com/about/) - is a module for Node.js applications to allow easy as cake email sending.
* [nodemailer-sendgrid-transport](https://github.com/sendgrid/nodemailer-sendgrid-transport) - is a transport plugin for Nodemailer that makes it possible to send through SendGrid's Web API!
* [pdfkit](https://github.com/foliojs/pdfkit) -  is a PDF document generation library, makes creating complex, multi-page, printable documents easy.
* [stripe](https://github.com/stripe/stripe-node) - library provides convenient access to the [Stripe](https://stripe.com/) API from applications written in server-side JavaScript.



### Create Pdoduct form
![create-product-form](./templates/create-product-form.jpg)

### Mobile menu
![mobile-menu](./templates/mobile-menu.jpg)

### Pagination
![pagination-first-page](./templates/pagination-first-page.jpg)
![pagination-middle-page](./templates/pagination-middle-page.jpg)
![pagination-last-page](./templates/pagination-last-page.jpg)
![admin-products-page](./templates/admin-products.jpg)

### Working with user data. Authorization, registration and password change
![signup-page](./templates/1.signpup-page.jpg)
![show-messages](./templates/2.show-messages.jpg)
![form-token](./templates/3.form-token.jpg)
![reset-password-button](./templates/4.reset-password-button.jpg)
![reset-password-page](./templates/5.reset-password-page.jpg)
![new-password](./templates/6.new-password.jpg)

### Placing an order through a payment system
![cart-page](./templates/cart-page.jpg)
![count-cart-order](./templates/count-cart-order.jpg)
![payment-page](./templates/payment-page.jpg)
![order-success](./templates/order-success.jpg)

### Get order details in PDF
![orders-page](./templates/orders-page.jpg)
![invoice-pdf](./templates/invoice-pdf.jpg)
