const { cloneWith } = require("lodash")

console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Comparando o this dentro de uma função')
    console.log(this == exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis()

/**
 * This dentro de uma função aponta para global
 * This fora de uma função aponta mara module.exports ou somente exports
 */