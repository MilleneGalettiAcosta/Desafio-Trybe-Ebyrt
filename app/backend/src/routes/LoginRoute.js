"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const LoginMiddleware_1 = __importDefault(require("../middlewares/LoginMiddleware"));
const router = (0, express_1.Router)();
// router.get('/');
router.post('/', LoginMiddleware_1.default.validateLogin, LoginController_1.default.login);
exports.default = router;
