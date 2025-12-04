const { Categoria } = require("../models")

exports.listar = async (req, res) => {
    try {
        const registros = await Categoria.findAll()
        res.json(registros)
    } catch (e) {
        res.status(500).json({erro: "Não foi possível listas as categorias"})
    }
}


exports.criar = async (req, res) => {
    const usuarioIdJWT = req.usuarioId;

    try {
        const registro = await Categoria.create(req.body)
        res.status(201).json(registro)
    } catch (e) {
        res.status(500).json({erro: "Erro ao criar a categoria:" + e})
    }
}


exports.alterar = async (req, res) => {
    const { id } = req.params;
        
    try {
        const [ atualizado ] = await Categoria.update(req.body, {
            where: {id}
        }) 

        if(atualizado) {
            res.status(200).json({sucesso: "Categoria atualizado com sucesso"})
        } else {
            res.status(404).json({erro: "Não foi possível localizar a categoria"})
        }
    } catch (e) {
        res.status(500).json({erro: "Erro ao atualizar a categoria" + e})
    }
}


exports.remover = async (req, res) => {
    const { id } = req.params

    try {
        const deletado = await Categoria.destroy({
            where: {id}
        })

        if (deletado) {
            res.status(200).json({sucesso: "Categoria apagado com sucesso."})
        } else {
            res.status(404).json({erro: "Categoria não encontrado"})
        }
    } catch (e) {
        res.status(500).json({erro: "Erro ao tentar remover a categoria: " + e})
    }
}
