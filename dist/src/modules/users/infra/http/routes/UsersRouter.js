"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersRouter = express_1.Router();
usersRouter.get('/', function (req, res) {
    return res.json({ message: 'Hello world' });
});
exports.default = usersRouter;
