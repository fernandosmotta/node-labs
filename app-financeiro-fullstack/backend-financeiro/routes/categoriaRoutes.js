const express = require("express")
const router = express.Router()
const categoriaController = require("../controllers/categoriaController")

// Proteger as rotas abaixo
const authMiddleware = require("../middlewares/authMiddleware")
router.use(authMiddleware)


// Definir os métodos http aceitos
router.get("/", categoriaController.listar)
router.post("/", categoriaController.criar)
router.put("/:id", categoriaController.alterar)
router.delete("/:id", categoriaController.remover)

module.exports = router