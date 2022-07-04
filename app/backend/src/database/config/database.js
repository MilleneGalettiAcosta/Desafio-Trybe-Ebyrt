"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'millene',
    password: process.env.DB_PASS || '12345678',
    database: process.env.DB_NAME || 'task_api',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;
