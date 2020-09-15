// EXEMPLO 1
const promessa = new Promise(function(outraFuncao){
    outraFuncao('Tarefa executada!')
})

promessa.then(retornoOutraFuncao => console.log(retornoOutraFuncao)) // Passando uma Arrow Function
promessa.then(function(retornoOutraFuncao){ // Passando uma Function
    console.log(retornoOutraFuncao)
})

// EXEMPLO 2
new Promise(function(outraFunction){
    outraFunction({
        nome: 'Jonathan Henrique',
        sobrenome: 'Alves de Lima'
    })
}).then( args => args).then(n => n.nome).then(l => console.log(l[0]))

// EXEMPLO 3 COM VARIAS FUNÇÕES
const p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Jose', 'Marcos'])
})

const minuscula = l => l.toLowerCase()

p
    .then(prmeiro =>  prmeiro[0])
    .then(letra => letra[0])
    .then(minuscula)
    .then(console.log)

// Padrão de declaração do Promises

/*
    Promises é uma função que devolve uma promeça quando atendida
    Ele recebe como argumento uma callback que contenha outra callback como parametro
    Ele retorna apenas um parametro
    Valores do uma promise devem ser acessados com metodo then()
    Metodo then() sempre trabalhará com inicial vindo da Promise
    A cada interação o valor retornada e modificado
*/
