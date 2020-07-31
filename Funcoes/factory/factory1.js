// Função factory é uma função que retorna um objeto

function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
console.log(criarPessoa('Bia', 'Nunes', 20))


function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 1500.00))
console.log(criarProduto('Salgadinho', 5.50))



