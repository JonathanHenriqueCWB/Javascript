// Funções Call e Apply
function getPreco(imposto =0, moeda ='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // Nesse contexto o preco e desc não estão definido
console.log(produto.getPreco()) // Nesse contexto preco e desconto asumir

const carro = {
    preco: 49999,
    desc: 0.20
}
console.log(getPreco.call(carro)) // console.log(getPreco.call(carro, 0.17, '$')) // Pega os parametros do contexto do obj carro
console.log(getPreco.apply(carro)) // console.log(getPreco.call(carro, [0.17, '$'])) // Pega os parametros do contexto do obj carro em um array

// A diferença entre as duas funções basicamente é como será passado os parametros