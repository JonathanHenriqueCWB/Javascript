


let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Jose', 'Marcos'])
})

const minuscula = l => l.toLowerCase()

p
    .then(prmeiro =>  prmeiro[0])
    .then(letra => letra[0])
    .then(minuscula)
    .then(console.log)


/*
    Promises é uma função que devolve uma promeça quando atendida
    Ele recebe como argumento uma callback que contenha outra callback como parametro
    Ele retorna apenas um parametro
    Valores do uma promise devem ser acessados com metodo then()
    Metodo then() sempre trabalhará com inicial vindo da Promise
    A cada interação o valor retornada e modificado
*/