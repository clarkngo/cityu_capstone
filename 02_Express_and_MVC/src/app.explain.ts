// imports the express module
import express from 'express';

import orderController from './controllers/order-controller';

import logger from './middlewares/logging';

// creates an Express application, traditionally named 'app'
const app = express();

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger);

/* route definition */
// "app.get()"
//  - method specifies a callback function that will be invoked
//  - whenever there is an HTTP GET request with a path ('/') relative to the site root.
// callback function
//  - takes a request and a response object as arguments,
//      and simply calls end() on the response to return the string "This is your Express server."
//      then it will end the response process.
// "res.render"

app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));

app.get('/order', orderController);

// starts up the server on port '3000' and prints a log comment to the console. With the server running,
// you could go to localhost:3000 in your browser to see the example response returned.
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
