/* Trbalhando com objetos em javascript, Obs apesar de ser bem parecido
um objeto em javascript não é um JSON (Javascript Object Notation) */

//Criando um objeto vazio e atribuindo os atributos
const produto1 = {}
produto1.nome = 'Celular'
produto1.preco = 1999.00
produto1['Desconto Produto'] = 0.41 // Evitar atributos com espaçamentos
console.log(produto1)

// Criando um objeto com os atributos
const produto2 = {
    nome: 'Camisa',
    preco: 79.99,
    descricao: 'Camisa de algodão'
}
console.log(produto2)

//Criando um objeto composto
const cliente = {
    nome: 'Bia',
    idade: 23,
    endereco : {
        Estado: 'SP',
        Cidade: 'São Paulo',
        Rua: 'Av são paulo',
        Numero: 110
    }
}
console.log(cliente)

// Criando um objeto a partir de uma classe
class Produto {
    con
}
