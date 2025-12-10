const { DataTypes } = require('sequelize');
// Biblioteca para criptografar a senha do usuário antes de salvar
const bcrypt = require("bcryptjs");

module.exports = (conexaoBanco) => {

    const Usuario = conexaoBanco.define('Usuario', {
        nome: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true, 
        },
        senha: DataTypes.STRING,
    }, {
        tableName: "usuarios"
    })

    // Criptografar a senha
    Usuario.beforeCreate(async (usuario) => {
        usuario.senha = await bcrypt.hash(usuario.senha, 10)
    })

    return Usuario;

}