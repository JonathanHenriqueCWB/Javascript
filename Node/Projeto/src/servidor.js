const express = require('express')
//const bodyParser = require('body-parser')
const dados = require('./dados')

const app = express()
// app.use(bodyParser.urlencoded({ extended: true  }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/produtos', (req, res) => {
    res.send(dados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(dados.getProdutoById(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = dados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
   // res.send(req.body)
   // res.json(req.body)
   res.json(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = dados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
   res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    const produto = dados.excluirProduto(req.params.id)
   res.json(produto)
})

const port = 3003
app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
})