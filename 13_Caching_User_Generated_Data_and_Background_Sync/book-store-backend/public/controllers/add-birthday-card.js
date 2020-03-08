"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var birthday_card_1 = require("../models/birthday-card");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, material = _a.material, picture = _a.picture, price = _a.price;
    try {
        birthday_card_1.addBirthdayCard(title, material, picture, price);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
//# sourceMappingURL=add-birthday-card.js.map