const nuns = [1, 2, 3, 4, 5]
console.log('Valor original: ', nuns)

// Irá criar um array a partir do array nuns, com todos valores multiplicado por 2
let resultado = nuns.map(function(e){
    return e * 2
})
console.log('Valor dobrado: ', resultado)

// Criando funções para utilizar na callback do map
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log('Formatado com 3 callback: ', resultado)