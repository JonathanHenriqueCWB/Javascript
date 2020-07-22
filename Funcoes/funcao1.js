// Função sen retorno
function imprimirSoma(valor1, valor2){
    console.log(valor1 + valor2)
}
imprimirSoma(5, 5)

// Função con retorno, se não for passado nada valor b pasará a valer 5
function somar (a, b = 5){
    return a + b
}
const resultado1 = somar(5, 35)
const resultado2 = somar(8)
console.log(resultado1, resultado2)