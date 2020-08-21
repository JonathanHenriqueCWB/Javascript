const alunos = [
    {nome: 'Bia', nota: 9.5, bolsista: false},
    {nome: 'Bia', nota: 7.5, bolsista: true},
    {nome: 'Bia', nota: 4.5, bolsista: true},
    {nome: 'Bia', nota: 10.0, bolsista: true},
]

const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(indice, valorAtual){
    console.log(indice, valorAtual)
    return indice && valorAtual
})

const algumBolsistas = alunos.map(a => a.bolsista).reduce(function(indice, valorAtual){
    console.log(indice, valorAtual)
    return indice || valorAtual
})

console.log('Alunos: ', todosBolsistas)
console.log('Alunos: ', algumBolsistas)