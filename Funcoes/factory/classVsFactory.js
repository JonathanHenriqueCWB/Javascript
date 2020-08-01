// CLASS
class Pessoa1{
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
    
    falar(){
        console.log('Meu nome é: ' + this.nome)        
    }
}
const p1 = new Pessoa1('Marcos', 'Alves', 19)
p1.falar()



// FACTORY
function pessoa2(nome, sobrenome){
    return{
        nome,
        sobrenome,
        falar: function(){
            console.log(`${nome} ${sobrenome}`)            
        }
    }
}

const pessoa3 = nome =>{
    return{
        falar: () => console.log('Meu nome é: ' + nome)        
    }
}
const p2 = pessoa3('João')
p2.falar()