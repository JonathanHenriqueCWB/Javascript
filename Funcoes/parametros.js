// Caso parametros não forem passados eles passarão a valer 1
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1())
console.log(soma1(5, 5, 5))
console.log(soma1(0, 0, 0)) // Gera um erro

/*#############################################*/

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

// Valor padrão do ES2015
function soma3(a =1, b=1, c=1){
    return a+b+c
}
console.log(soma3())
console.log(soma3(4, 4, 4))







