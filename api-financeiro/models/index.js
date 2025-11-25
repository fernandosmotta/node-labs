
// Importa a conexão com o banco de dados
const conexaoBanco = require("../config/database")

// Importa o model financeiro
const Financeiro = require("./financeiro")(conexaoBanco)
// Importa o model usuario
const Usuario = require("./usuario")(conexaoBanco)

// Usuario tem muitos financeiros
// O financeiro pertence a um único usuário
// Um-para-muitos


// Um usuário pode ter muitos registros financeiros (hasMany)
Usuario.hasMany(Financeiro, { foreignKey: 'usuarioId' })

// Cada lançamento financeiro pertence a um único usuário (belongsTo)
Financeiro.belongsTo(Usuario, { foreignKey: 'usuarioId' })


module.exports = { conexaoBanco, Usuario, Financeiro }