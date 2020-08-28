const express = require('express')

const app = express()

app.get('/produtos', (req, res) => {
    res.send({nome: 'Notebook', preco: 199.99}) // Já converte para JSON ao enviar
})

const port = 3003
app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
})