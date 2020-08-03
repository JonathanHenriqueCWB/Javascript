const pessoa = {
    nome: 'Ana',
    idade: 40
}
pessoa.nome = 'Bia'
pessoa.idade = 27

console.log(pessoa)

// Se tentarmos instanciar novamente esse objeto dará erro
// nome: 'Maro'
//     pessoa = {
// }

// Caso queira que ninguem altero os atributos basta congelar o objeto
Object.freeze(pessoa)
pessoa.nome = 'Marcos' // Não será alterado
console.log(pessoa) 


/*
    O objeto aponta para um endereço de memoria,
    logo quando se é alterado um atributo o endereço
    de memoria continua o mesmo

    Para recusar que alguem consiga alterar os atributos
    de um objeto pode ser utilizado o metodo freeze
*/