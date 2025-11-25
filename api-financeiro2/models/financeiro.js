const { DataTypes, TableHints } = require("sequelize");

module.exports = (sequelize) => {
    const Financeiro = sequelize.define('Financeiro', {
        data: DataTypes.DATE,
        descricao: DataTypes.STRING,
        formaPagamento: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        tipo: DataTypes.ENUM('entrada', 'saída')
    }, {
        tableName: 'financeiro',
        freezeTableName: true
    });

    return Financeiro;
}