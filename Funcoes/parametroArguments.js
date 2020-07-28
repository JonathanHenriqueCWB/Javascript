function somarTodos(){    
    let soma =0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(somarTodos())
console.log(somarTodos(5, 25))
console.log(somarTodos(5, 25, ' string'))
console.log('a', 'b', 'c')


