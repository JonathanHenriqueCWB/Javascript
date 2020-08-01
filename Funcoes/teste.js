// CLASSE
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log("Meu nome é: " + this.nome +" "+ this.sobrenome)
    }
}
const p1 = new Pessoa('Jose', 'Carlos')
p1.falar()



// FACTORY
const pessoa2 = (nome, sobrenome) =>{
    return{
        nome,
        sobrenome,
        falar: () => console.log(`${nome} ${sobrenome}`)
    }
}
const p2 = pessoa2('Bia', 'Nunes')
p2.falar()
