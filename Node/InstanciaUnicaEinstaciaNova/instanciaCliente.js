// Import comun
const contadorUnicaA = require('./instanciaUnica')
const contadorUnicaB = require('./instanciaUnica')

// Import factory, instanciando a função factory no import
const contadorNovaA = require('./instanciaNova')()
const contadorNovaB = require('./instanciaNova')()

// Testando o tipo do import
const teste = require('./teste')

// O com
console.log(typeof contadorUnicaA)
console.log(typeof contadorNovaA)
console.log(typeof teste) // Todos os imports serão tratados como objeto

console.log('Comparando os dois padrão comun: ', contadorUnicaA === contadorUnicaB)
console.log('Comparando os dois padrão factory: ', contadorNovaA === contadorNovaB)

// Incrementando o contadorUnicaA e imprimindo o B
contadorUnicaA.inc()
contadorUnicaA.inc()
console.log('Ao incrementar o contadorUnicaA o B tbm é alterado, valor:', contadorUnicaB.valor)

// Incrementando o contadorNovaA e imprimindo o B
contadorNovaA.inc()
contadorNovaA.inc()
console.log('Ao incrementar o contadorNovaA B não é alterado, valor:', contadorNovaB.valor)

/**
 *  O padrão comun de import e export tem cache e aponta para o mesmo
 *  objeto, ou seja, sempre será retornado o mesmo objeto.
 * 
 *  Caso utilize um padrão factory isso não acontecerá, pois o padrão
 *  factory sempre retornara uma nova instancia do objeto, mesmo no import
 *  e export
 */
