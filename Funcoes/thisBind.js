// Criando um objeto com uma função interna
const pessoa = {
    saudacao: 'Hello',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
