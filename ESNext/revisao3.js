// ES8 Object.values/Object.entries
const a = { a:1, b:2, c:3 }
console.log(Object.values(a))
console.log(Object.entries(a))

// Melhorias na notação Literal
const nome = 'Carla'
const pessoa ={
    nome,
    sobrenome: 'Nunes',
    ola(){
        return 'Olá'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())