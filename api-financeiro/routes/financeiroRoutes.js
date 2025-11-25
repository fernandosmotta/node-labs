const express = require("express")
const router = express.Router()
const financeiroController = require("../controllers/financeiroController")

// Definir os métodos http aceitos
router.get("/", financeiroController.listar)
router.post("/", financeiroController.criar)
router.put("/:id", financeiroController.alterar)
// router.delete("/:id")

module.exports = router