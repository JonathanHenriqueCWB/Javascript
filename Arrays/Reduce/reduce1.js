// Array de Objetos de alunos
const alunos = [
    {nome: 'Bia', nota: 7.3, bolsista: false},
    {nome: 'João', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota:10.0, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){    
})
console.log('Alunos: ', resultado)