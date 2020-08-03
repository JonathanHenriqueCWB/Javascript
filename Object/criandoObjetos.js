// Usando notação literal
const obj1 = {}
console.log(obj1)


// Objeto em JS
const obj2 = new Object
console.log(obj2)


// Função construtora
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1-desconto)
    }
}
const p1 = new Produto('mesa', 1000, 0.10)
const p2 = new Produto('tv', 1000, 0.20)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())


// Função factory
function criarFuncionario(nome, salario, faltas){
    // Retornando um objeto literal
    return{
        nome,
        salario,
        faltas,
        getSalario(){
        }
    }
}
const f1 = new criarFuncionario('João', 7980, 4)
const f2 = new criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Bia'
console.log(filha)


// Criando um objeto a partir de um JSON
const fromJSON = JSON.parse( '{"nome": "Bia", "info": "sou um JSON"}' )
console.log(fromJSON)