const express = require('express');
const app     = express();
const port    = 3000;


// Configurar o Express para aceitar JSON no corpo das requisições
app.use(express.json());


let produtos = [
    { id: 1, nome: 'Iphone 12', preco: 2.500 },
    { id: 2, nome: 'Samsung S20', preco: 1.800 },
    { id: 3, nome: 'Xiaomi Mi 10', preco: 1.500 },
    { id: 4, nome: 'Notebook Dell Inspiron 15', preco: 3.200 },
    { id: 5, nome: 'Monitor LG 24"', preco: 690 },
];

let nextId = 6;

app.get('/produtos', (req, res) => {
    res.json(produtos, 200);
});

app.post('/produtos', (req, res) => {
    nextId++;
    
    const novoProduto = {
        id: nextId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);  
});

app.put('/produtos/:id', (req, res) => {
    const produto_id = parseInt(req.params.id);
    
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});