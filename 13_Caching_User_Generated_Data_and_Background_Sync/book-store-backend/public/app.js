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
var helmet_1 = __importDefault(require("helmet"));
var add_book_1 = __importDefault(require("./controllers/add-book"));
var fetch_books_1 = __importDefault(require("./controllers/fetch-books"));
var fetch_book_1 = __importDefault(require("./controllers/fetch-book"));
var update_book_1 = __importDefault(require("./controllers/update-book"));
var delete_book_1 = __importDefault(require("./controllers/delete-book"));
dotenv_1.default.config();
// Initialize MongoDB
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose_1.default.set('useFindAndModify', false);
var db = mongoose_1.default.connection;
var app = express_1.default();
// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet_1.default());
// Set the Access-Control-Allow-Origin to allow our Angular app call the API
// app.use(cors()); // Allow all CORS requests - For development env only)
app.use(cors_1.default({ origin: process.env.FRONTEND_ORIGIN }));
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Book Routes
app.post('/books', add_book_1.default);
app.get('/books', fetch_books_1.default);
app.get('/books/:id', fetch_book_1.default);
app.put('/books', update_book_1.default);
app.delete('/books/:id', delete_book_1.default);
app.listen(process.env.BACKEND_PORT, function () { return console.log("The server is running at http://" + process.env.BACKEND_IP + ":" + process.env.BACKEND_PORT); });
//# sourceMappingURL=app.js.map