//Recurso ES2015 desestruturação

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logadouro: 'Rua Abc',
        numero: 1000
    }
}

// Tira o atributo nome e ana de dentro do objeto e armazena e uma constante do mesmo nome
const {nome, idade} = pessoa
// Caso queira numda o nome das constante
const {nome: n, idade: i} = pessoa
// Atributos inexitentes
const {sobrenome, email } = pessoa
// Atributos mais internos do objeto
const {endereco: {logadouro, numero, cep}} = pessoa

console.log(nome, idade)
console.log(n, i)
console.log(sobrenome, email)
console.log(logadouro, numero, cep)
