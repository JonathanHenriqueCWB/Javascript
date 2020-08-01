// Função factory é uma função que retorna um objeto
function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const p1 = criarPessoa('Bia', 'Nunes', 20)
console.log(typeof(p1), p1)


// Func Factory arrow
const criarPessoa2 = (nome, sobrenome) =>{
    return{
        nome,
        sobrenome
    }
}
const p2 = criarPessoa2('Jose', 'Carlos')
console.log(typeof(p2), p2)

// Func Factory retornando uma função
const criarPessoa3 = (nome, sobrenome) =>{
    return{
        nome,
        sobrenome,
        falar: () => console.log(`Nome: ${nome} sobrenome: ${sobrenome}`)
    }
}
const p3 = criarPessoa3('Jonathan', 'Lima')
console.log(typeof(p3))
p3.falar()



