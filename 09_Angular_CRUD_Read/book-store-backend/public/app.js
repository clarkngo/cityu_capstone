"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
var add_book_1 = __importDefault(require("./controllers/add-book"));
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose_1.default.connection;
var app = express_1.default();
// Set the Access-Control-Allow-Origin to htpp://localhost:4200 to allow our Angular app to call the API
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
// The router
app.post('/book', add_book_1.default);
app.get('/books', fetch_books_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
