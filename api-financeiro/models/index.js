// Importa o Sequelize
const { Sequelize } = require("sequelize");

// Importa a conexão com o banco de dados
const sequelize  = require("../config/database");

// Importa o model financeiro
const Financeiro = require("./financeiro")(sequelize);

module.exports = {sequelize, Financeiro}