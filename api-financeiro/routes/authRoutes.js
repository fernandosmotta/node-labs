const express = require("express")
const router  = express.Router()
const authController = require("../controllers/authController")

// Definir os métodos http aceitos
router.post("/registrar", authController.registrar)
router.post("/login", authController.login)


module.exports = router