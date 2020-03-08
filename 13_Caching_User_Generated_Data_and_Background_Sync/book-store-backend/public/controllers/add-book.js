"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../models/book");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, isbn = _a.isbn, author = _a.author, picture = _a.picture, price = _a.price;
    try {
        book_1.addBook(title, isbn, author, picture, price);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
//# sourceMappingURL=add-book.js.map