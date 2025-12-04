
// executar também o arquivo index.js
const { Model } = require("sequelize");
const { Financeiro, Categoria } = require("../models")

// método para ser chamado pelo GET
exports.listar = async (req, res) => {
    const usuarioIdJWT = req.usuarioId;

    try {
        
        const registros = await Financeiro.findAll({
            where: { usuarioId: usuarioIdJWT },
            include: [{
                model: Categoria,
                attributes: ['id', 'nome', 'descricao']
            }]
        });

        res.json(registros)

    } catch (ex) {
        res.status(500).json({ erro: "Não foi possível listar os registros" })
    }
}




// método para ser chamado pelo POST
exports.criar = async (req, res) => {
    // Essa variavel vem do middleware (authMiddleware)
    const usuarioIdJWT = req.usuarioId; 

    try{
        // Montar o objeto que será criado no banco
        const dados = {
            ...req.body,
            usuarioId: usuarioIdJWT
        }

        const registro = await Financeiro.create(dados)
        res.status(201).json(registro)
    } catch (listaDeErros) {
        if (listaDeErros.name === 'SequelizeValidationError'){
            return res.status(400).json({
                inconsistencias: listaDeErros.errors.map(e => e.message)
            })
        }
        res.status(500).json({erro: "Erro ao criar o registro: " + listaDeErros})
    }
}

// método para ser chamado pelo PUT
exports.alterar = async (req, res) => {
    const { id } = req.params
    try{
        const [ atualizado ] = await Financeiro.update(req.body, {
            where: { id }
        })
        if (atualizado) {
            res.status(200).json({sucesso: "Registro atualizado "})
        }else{
            res.status(404).json({sucesso: "Registro não encontrado "})
        }

    } catch (listaDeErros) {
        if (listaDeErros.name === 'SequelizeValidationError'){
            return res.status(400).json({
                inconsistencias: listaDeErros.errors.map(e => e.message)
            })
        }
        res.status(500).json({erro: "Erro ao atualizar o registro: " + listaDeErros})
    }
}

// método para ser chamado pelo DELETE
exports.remover = async (req, res) => {
    const { id } = req.params
    try{
        const deletado = await Financeiro.destroy({
            where: { id }
        })
        if (deletado) {
            res.status(200).json({sucesso: "Registro apagado com sucesso "})
        }else{
            res.status(404).json({sucesso: "Registro não encontrado "})
        }

    } catch (listaDeErros) {
        if (listaDeErros.name === 'SequelizeValidationError'){
            return res.status(400).json({
                inconsistencias: listaDeErros.errors.map(e => e.message)
            })
        }
        res.status(500).json({erro: "Erro ao atualizar o registro: " + listaDeErros})
    }
}