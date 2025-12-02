const { DataTypes } = require("sequelize")

module.exports = (conexaoBanco) => {
    const Categoria = conexaoBanco.define('Categoria', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
    }, {
        tableName: "categorias"
    })

    return Categoria;
}