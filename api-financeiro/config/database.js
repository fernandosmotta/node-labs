// Importa o Sequelize
const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.eventNames.DB_HOST,
        dialect: 'postgres',
        logging: false
    })

module.exports = sequelize;