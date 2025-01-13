"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@repo/backend-common/config");
const types_1 = require("@repo/common/types");
const app = (0, express_1.default)();
app.post("/singup", (req, res) => {
    const data = types_1.CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect Inputs"
        });
        return;
    }
    res.json({
        userId: 123,
    });
});
app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jsonwebtoken_1.default.sign({
        userId
    }, config_1.JWT_SECRET);
    res.json({
        token
    });
});
app.get("/user", (req, res) => {
    res.json({
        roomId: 123,
    });
});
app.listen(3001);
