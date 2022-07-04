"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class taskModel extends sequelize_1.Model {
}
taskModel.init({
    id: sequelize_1.DataTypes.NUMBER,
    task: sequelize_1.DataTypes.STRING,
    deadline: sequelize_1.DataTypes.NUMBER
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'tasks',
    timestamps: false,
});
exports.default = taskModel;
