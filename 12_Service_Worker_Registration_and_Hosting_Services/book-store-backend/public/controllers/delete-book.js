"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../models/book");
var handler = function (req, res) {
    var id = req.params.id;
    try {
        book_1.deleteBook(id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
//# sourceMappingURL=delete-book.js.map