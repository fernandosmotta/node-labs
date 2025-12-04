// Modelo ou Entidade
// ORM - Object-Relational Mapping (Mapeamento de Objeto relacional)

const { DataTypes } = require("sequelize");
const { Categoria } = require(".");

module.exports = (conexaoBanco) => {

    const Financeiro = conexaoBanco.define('Financeiro', { 
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "A data é obrigatória"},
                isDate: { msg: "A data deve estar no formato yyyy-mm-dd"},
            },
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "A descrição é obrigatória"},
                notEmpty: { msg: "A descrição não pode estar vazia"},
            },
        },
        formaPagamento: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "A forma de pagamento  é obrigatória"},
                isIn: {
                    args: [["pix","dinheiro","crédito","débito","boleto"]],
                    msg: "Forma de pagamento inválida",
                },
            },            
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: { msg: "O valor é obrigatório"},
                isFloat: { msg: "O valor deve ser numérico" },
                min: { args: [0.01], msg: "O valor deve ser maior que zero"},
            },
        },
        tipo: {
            type: DataTypes.ENUM('entrada','saida'),
            allowNull: false,
            validate: {
                notNull: { msg: "O tipo é obrigatório"},
                isIn:{
                    args: [["entrada","saida"]],
                    msg: "Tipo deve ser 'entrada' ou 'saida'",
                },
            },
        },
        categoriaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categorias',
                key: 'id'
            }
        }
    },{
        tableName: "financeiro",    // Força o nome da tabela
        freezeTableName: true,      // Impede a pluralização 
    })    
    return Financeiro;
}