// CLASSE
class Pessoa1{
    // Não é necessario declarar as propriedades
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


// FUNÇÃO CONSTRUTORA
function Pessoa2(nome, sobrenome, idade){
    
    // Atributos
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

    // Funcao
    this.getNome = () => `Meu nome é: ${nome} ${sobrenome} ${idade}`
}
const p2 = new Pessoa2('Jose', 'Carlos', 45)
console.log(p2.getNome())


// Função factory
const pessoa3 = nome =>{
    return{
        falar: () => console.log('Meu nome é: ' + nome)        
    }
}
const p3 = pessoa3('João')
p3.falar()