/* Uma variavel que não foi inicializada e diferente de uma nula
Variavel nula não aponta para nhenhum endreço de memoria, e pode ser
utilizada para apagar valores de endereço de memoria para variaveis tipo
referencia */

let valor  // não inicializada
console.log(valor)

valor = null // não aponta para nenhu endereço de memória
console.log(valor)

const produto = {}
console.log(produto)
console.log(produto.nome)

produto.nome = 'Mario'
console.log(produto)
console.log(produto.nome)
