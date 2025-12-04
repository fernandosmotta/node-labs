
// Importa a conexão com o banco de dados
const conexaoBanco = require("../config/database")

// Importa o model financeiro
const Financeiro = require("./financeiro")(conexaoBanco)
// Importa o model usuario
const Usuario = require("./usuario")(conexaoBanco)
// Importa o model categoria
const Categoria = require("./categoria")(conexaoBanco)

// Usuario tem muitos financeiros
// O financeiro pertence a um único usuário
// Um-para-muitos


// Um usuário pode ter muitos registros financeiros (hasMany)
Usuario.hasMany(Financeiro, { foreignKey: 'usuarioId' })

// Cada lançamento financeiro pertence a um único usuário (belongsTo)
Financeiro.belongsTo(Usuario, { foreignKey: 'usuarioId' })

// Uma categoria pode ter muitos registros financeiros (hasMany)
Categoria.hasMany(Financeiro, { foreignKey: 'categoriaId' })

// Cada lançamento financeiro pertence a uma única categoria
Financeiro.belongsTo(Categoria, {foreignKey: "categoriaId"})


module.exports = { conexaoBanco, Usuario, Categoria, Financeiro }