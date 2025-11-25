
// Biblioteca para criptografar a senha do usuário antes de salvar
const bcrypt = require("bcryptjs");
// Biblioteca para gerar o token de autenticação de usuário
const jwt = require("jsonwebtoken");

// executar também o arquivo index.js
const { Usuario } = require("../models")


// método para ser chamado pelo POST - Registrar Usuário
exports.registrar = async (req, res) => {
    const usuario = await Usuario.create(req.body)
    res.status(201).json(usuario)
}

exports.login = async (req, res) => {
    // Desestruturação de objeto
    const {email, senha} = req.body;

    const usuario = await Usuario.findOne({where: {email}})

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha)) ) {
        return res.status(401).json({error: "Credenciais inválidas"});
    }

    // Caso os dados estejam corretos
    const token = jwt.sign({id: usuario.id}, process.env.JWT_SECRET);
    res.json({token: token});
}