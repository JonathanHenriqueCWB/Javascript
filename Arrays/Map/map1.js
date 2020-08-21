// ARRAY
const nuns = [1, 2, 3, 4, 5]

// Criando funções arrow para utilizar na callback do map
const soma10 = e => e + 10
const triplicar = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

// Irá criar um array a partir do array nuns, com todos valores multiplicado por 2
const dobro = nuns.map(function(e){
    return e * 2
})

const triplo = nuns.map(soma10).map(triplicar).map(paraDinheiro)

console.log('Valor original: ', nuns)
console.log('Valor dobrado: ', dobro)
console.log('Formatado para moeda: ', triplo)

/**
 * Map é utilizado para fazer uma transformação no array (maperar) para um outro
 * array do mesmo tamanho, so que com os dados TRANSFORMADOS
 * 
 * Junto ao map internamente é executado um laço e retornado um array
 * diferente do original, ou seja, ele retorna um novo array e não altera
 * o array original
 * 
 * Pode ser passado uma função callback, ou ser criado diretamente na 
 * estrutura
 * 
 * A função callback pode receber 3 parametro: valor atual, indice e o proprio
 * array
 */