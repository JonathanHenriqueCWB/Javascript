//Funções anonimas

const soma = function (x, y) {
    return x + y
}

// Funcao receberá dois parametros e uma função, caso não seja passado a função
// por padrão ela recebera a função soma
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){
    return x-y
})
imprimirResultado(3, 4, (x, y) => x * y)