"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var handler = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email, age = _a.age;
    try {
        user_1.createUser(username, password, email, age);
    }
    catch (err) {
        console.error(err);
    }
    res.end("The user " + username + " has been created.");
};
exports.default = handler;
