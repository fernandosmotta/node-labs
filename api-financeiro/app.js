require('dotenv').config()
const express = require('express')
const financeiroRoutes = require("./routes/financeiroRoutes")
const authRoutes = require("./routes/authRoutes")
const PORT = 3000
const { conexaoBanco } = require("./models")

const app = express()
app.use(express.json())     

// Chama o roteador apropriado à rota
app.use("/financeiro", financeiroRoutes)
app.use("/auth", authRoutes)

conexaoBanco.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`Rodando em http://localhost:${PORT}`)
    })
})