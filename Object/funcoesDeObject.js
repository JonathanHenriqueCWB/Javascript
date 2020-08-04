const pessoa ={
    nome: 'Bia',
    idade: 20,
    peso: 60
}

// Pega todas as chaves de objeto 
console.log(Object.keys(pessoa))

// Pega todos os valores do objeto
console.log(Object.values(pessoa))

// Divide cada chave/valor em um array diferente (array de arrays)
const arrays = Object.entries(pessoa)
arrays.forEach(array => {
    console.log(array)
});
Object.entries(pessoa).forEach(([chave, valor]) => { // Foreach com desestruturação
    console.log(chave, valor)
});

// Atribuindo propriedades ao objeto com Object defineProperty
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // listar
    writable: false,    // auterar valor
    value: '01/01/2000' // atibui valor 
})
pessoa.dataNascimento = '01/01/2020' // Não irá aceitar
console.log(pessoa.dataNascimento)

// Object.assign ES6 (ECMAScript 2015), concatena objetos no primeiro argumento (objeto)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest)