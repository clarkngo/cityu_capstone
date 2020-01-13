"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_controller_1 = __importDefault(require("./controllers/order-controller"));
var logging_1 = __importDefault(require("./middlewares/logging"));
var app = express_1.default();
app.use(logging_1.default);
app.use(express_1.default.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// the router
app.get('/', function (req, res) { return res.render('index', {
    title: 'The index page title',
    content: 'This is the content for the index page.'
}); });
app.get('/order', order_controller_1.default);
app.listen(3000, function () { return console.log('The server is running on http://localhost:3000'); });
