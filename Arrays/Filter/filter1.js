// Filter com array
const frutas = ['Banana', 'Maça', 'Uva', 'Tomate', 'Abacaxi']
const frutasFiltrada = frutas.filter(function(e){
    return e != 'Tomate'
})
console.log('Frutas: ', frutasFiltrada)

// Filter com array de objetos
const produtos = [
    {nome: 'Notebook', preco: 2999, fragil: true},
    {nome: 'Mouse', preco: 59.99, fragil: true},
    {nome: 'GPU 570', preco: 999.99, fragil: true},
    {nome: 'Teclado', preco: 199.90, fragil: false}
]

const fragil = e => e.fragil
const caro = e => e.preco > 900

const produtosFiltrados = produtos.filter(fragil).filter(caro)

/*
const produtosFiltrados = produtos.filter(function(p){
    return p.fragil === true && p.preco > 900
})
*/
console.log('Produtos: ', produtosFiltrados)

/**
 * Por padrão filter recebe tres parâmetros, o item atual, indice e o próprio array
 * Ambas propriedades podem ser utilizadas no filtro 
 */

