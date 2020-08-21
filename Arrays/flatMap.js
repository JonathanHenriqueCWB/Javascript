// Array de Ojetos com array de objetos interno
const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            { nome: 'Gustavo', nota: 5.5 },
            { nome: 'Jesica', nota: 9.5 },
            { nome: 'Marcos', nota: 7.5 }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            { nome: 'Mario', nota: 4.5 },
            { nome: 'Yosh', nota: 10.0 },
            { nome: 'Luigi', nota: 9.5 }
        ]
    }
]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)
const n1 = escola.map(getNotasDaTurma)

console.log(n1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const n2 = escola.flatMap(getNotasDaTurma)
console.log(n2)