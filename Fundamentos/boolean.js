// Espressões boleanas em javascritp

let ativo = false
console.log(ativo)

ativo = 1
console.log(!!ativo)

console.log('Valores verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativo = true))

console.log('Valores falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))

//Nesse casso caso a variavel retorne false ira atribuir o valor nao informado
let nome = ''
console.log(nome || 'Nome não informado')










