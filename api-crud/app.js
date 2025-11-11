const express = require('express');
const cors    = require('cors');
const app     = express();
const port    = 3000;


// Permitir requisições externas - (Permissão para todas as origens)
//app.use(cors()); 

// Permitir requisições externas - (Permissão espefificas)
app.use( cors({origin: 'http://127.0.0.1:5500'}) );

// Configurar o Express para aceitar JSON no corpo das requisições
app.use(express.json());


let produtos = [
    { id: 1, nome: 'Iphone 12', preco: 2.500 },
    { id: 2, nome: 'Samsung S20', preco: 1.800 },
    { id: 3, nome: 'Xiaomi Mi 10', preco: 1.500 },
    { id: 4, nome: 'Notebook Dell Inspiron 15', preco: 3.200 },
    { id: 5, nome: 'Monitor LG 24', preco: 690 },
];

let nextId = 6;


// Listar todos os produtos 
app.get('/produtos', (req, res) => {
    return res.status(200).send(produtos);
});


// Obter um produto pelo ID
app.get('/produtos/:id', (req, res) => {
    const produto_id = parseInt(req.params.id);

    const produto = produtos.find(prod => prod.id === produto_id)

    if (!produto)
        return res.status(400).json({mensagem: "Produto não foi localizado"});

    return res.status(200).send(produto);
});


// Cadastrar um novo produto
app.post('/produtos', (req, res) => {
    const {nome, preco} = req.body;

    if(!nome || !preco) {
        return res.status(400).send({mensagem: "O nome e o preço são obrigatórios"})
    }

    const novoProduto = {
        id: nextId++,
        nome,
        preco
    }

    produtos.push(novoProduto);

    return res.status(201).send({mensagem: 'Produto CADASTRADO com sucesso', produto: novoProduto});
});


// Atualizar um produto existente
app.put('/produtos/:id', (req, res) => {
    const produto_id    = parseInt(req.params.id);
    const {nome, preco} = req.body;

    if (!nome || !preco) 
        return res.status(400).send({mensagem: "Nome e o preço são obrigatórios"});
    
    
    // busca o produto pelo seu ID
    const index = produtos.findIndex(prod => prod.id === produto_id)

    if (index === -1)
        return res.status(400).json({mensagem: "Produto não foi localizado"});

    produtos[index] = {
        id: produto_id,
        nome: nome,
        preco: preco
    }

    return res.status(200).json({mensagem: 'Produto ATUALIZADO com sucesso', produto: produtos[index]});
});


// Remover um produto pelo ID
app.delete('/produtos/:id', (req, res) => {
    const produto_id     = parseInt(req.params.id);
    const tamanhoInicial = produtos.length; // Obter o tamanho do array

    // Filtrar o array, mantendo os produtos diferentes do ID recebido
    produtos = produtos.filter(produtoAtual => produtoAtual.id !== produto_id);

    if (produtos.length === tamanhoInicial) {
        return res.status(400).send({mensagem: "Produto não foi localizado"});
    }

    return res.status(204).send();
});



// Iniciar o servidor
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});
