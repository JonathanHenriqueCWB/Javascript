// Trabalhando com numeros em javascript

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Retorna um valor booleano
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.811
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Controle das casas decimais
console.log(media.toFixed(2))

// Converter numerico em string
console.log(media.toString())

// Converte a media em string so que e valor binario
console.log(media.toString(2))

console.log(typeof media)
console.log(typeof media.toString())