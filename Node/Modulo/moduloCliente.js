// Importando modulos externos
const moduloA = require('./modulaA')
const moduloB = require('./moduloB')
const teste = require('../teste')

// Usando o modula A
console.log('Modula A:', moduloA.ola)
console.log('Modula A:', moduloA.bemVidndo)
console.log('Modula A:', moduloA.ateLogo)
console.log('Modulo A', moduloA)

// Usando modulo B
console.log('Modulo B', moduloB.bomDia)
console.log('Modulo B', moduloB.boaNoite())
console.log('Modulo B', moduloB)

// Modulo teste
teste.n1 = 100
teste.n2 = 100
console.log('Soma dos dois valores: ', teste.somar())