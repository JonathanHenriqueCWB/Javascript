//Par nome/valor
const saudacao = 'Hello' //contexto léxico 1
console.log(saudacao)

function exec(){
    const saudacao = 'Ola' //contexto léxico 2
    return saudacao
}
console.log(exec())

// Os objetos são grupos aninhados de pares e nome/valor
const Cliente = {
    nome : "Carlos",
    idade : 64,
    peso: 70,
    endereco: {
        logadouro: 'Av Manoel Ribas',
        numero: 1234
    }
}
console.log(Cliente)
