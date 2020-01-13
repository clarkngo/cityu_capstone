"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports the express module
var express_1 = __importDefault(require("express"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var logging_1 = __importDefault(require("./middlewares/logging"));
// creates an Express application, traditionally named 'app'
var app = express_1.default();
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(logging_1.default);
/* route definition */
// "app.get()"
//  - method specifies a callback function that will be invoked
//  - whenever there is an HTTP GET request with a path ('/') relative to the site root.
// callback function
//  - takes a request and a response object as arguments,
//      and simply calls end() on the response to return the string "This is your Express server."
//      then it will end the response process.
// "res.render"
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/order', order_controller_1.default);
// starts up the server on port '3000' and prints a log comment to the console. With the server running,
// you could go to localhost:3000 in your browser to see the example response returned.
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
