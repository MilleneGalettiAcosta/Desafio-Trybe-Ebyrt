"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class userModel extends sequelize_1.Model {
}
userModel.init({
    id: sequelize_1.DataTypes.NUMBER,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'users',
    timestamps: false,
});
exports.default = userModel;
