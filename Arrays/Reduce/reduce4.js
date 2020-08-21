// Imperativo vs declarativo
const alunos = [
    {nome: 'Bia', nota: 7.5},
    {nome: 'Marcos', nota: 8.5},
    {nome: 'Marcelo', nota: 9.5},
    {nome: 'Ana', nota: 10},
]

// Imperativo
let total =0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota    
}
console.log('Total imperativo', (total/alunos.length).toFixed(2))

// Declarativo
const notas = n => n.nota
const soma = (indice, valor) => indice + valor 
const resultado = alunos.map(notas).reduce(soma)

console.log('Total declarativo: ', (resultado/alunos.length).toFixed(2))