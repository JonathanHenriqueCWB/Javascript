// Object.preventExtensions
const produto = Object.preventExtensions({
	nome: 'Jose', preco: 2.99, tag: 'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar'
delete produto.tag
console.log(produto)

// Object.seal, poderá somente modificar os atributos
const pessoa = {nome: 'Bia', idade: 29}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Biatriz'
pessoa.sobrenome = 'Nunuz'
delete pessoa.nome
console.log(pessoa)

// Object.freeze = selado com valores constantes (não pode alterar)