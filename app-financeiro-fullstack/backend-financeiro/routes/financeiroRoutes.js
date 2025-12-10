const express = require("express")
const router = express.Router()
const financeiroController = require("../controllers/financeiroController")

// Proteger as rotas abaixo
const authMiddleware = require("../middlewares/authMiddleware")
router.use(authMiddleware)


// Definir os métodos http aceitos
router.get("/", financeiroController.listar)
router.post("/", financeiroController.criar)
router.put("/:id", financeiroController.alterar)
router.delete("/:id", financeiroController.remover)

module.exports = router