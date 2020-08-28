const fs = require('fs')


const produto = {
    nome: 'Celular',
    preco: 1299.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo com sucesso!')
})

const produtos = [
    {nome: "Mouse", preco: 49.99},
    {nome: "Teclado", preco: 49.99},
    {nome: "Monitor", preco: 199.99},
]

fs.writeFile(__dirname + '/arrayDeArquivosGerados.json', JSON.stringify(produtos), err =>{
    console.log(err || 'Salvando arquivos...')
})