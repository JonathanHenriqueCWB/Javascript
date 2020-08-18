// Funcionamento interno do filter
Array.prototype.filter2 = function(callback){
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            novoArray.push(this[i])        
        }
    }
    return novoArray
}

// Array de objetos produtos
const produtos = [
    {nome: 'Notebook', preco: 2999, fragil: true},
    {nome: 'iPad', preco: 999, fragil: true},
    {nome: 'Teclado', preco: 59.99, fragil: false },
    {nome:'Mouse', preco: 19.99, fragil: false} 
]

// Funções callback
const fragil = p => p.fragil
const caro = p => p.preco > 500

// Aplicando os filtros
const resultadoFilter = produtos.filter2(fragil).filter2(caro)
console.log('Produtos filtrados: ', resultadoFilter)