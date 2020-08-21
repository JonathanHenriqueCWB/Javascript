const alunos = [
    { nome: 'João', nota: 7.5, bolsista: false },
    { nome: 'Maria', nota: 9.8, bolsista: true },
    { nome: 'Marcos', nota: 9.5, bolsista: false },
    { nome: 'Bia', nota: 10.0, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulado, valorAtual) {
    console.log('Dentro do reduce: ', acumulado, valorAtual)
    return acumulado + valorAtual
}, 0)

console.log('Resultado final: ', resultado)

/**
 * O reduce percorre o array, serve para transformar um array 
 * em un unico elemento, ou mais
 * 
 * Ele utiliza um parametro como acumulador, esse mesmo pode ser
 * passado (tipo um paramentro), caso não seja informado automaticamente
 * o primeiro elemento (indice) assumirá esse papel
 * 
 * Ex numeros[1, 2, 3, 4, 5] nesse casso o acumulador será o indice 0
 * o numero 1
 * 
 * O segundo elemento assumirú o papel de item atual, que 
 * será passado para próxima operação
 */