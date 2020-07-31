class Pessoa{
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
const p1 = new Pessoa('Marcos', 'Alves', 19)
p1.falar()

// Função arrow
const pessoa = nome =>{
    return{
        falar: () => console.log('Meu nome é: ' + nome)
        
    }
}
const p2 = pessoa('João')
p2.falar()