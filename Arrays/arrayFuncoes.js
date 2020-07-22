// Métodos e funções importantes de array

/**
 *  Métodos exemplificados:
 *  pop()
 *  push()
 *  shift()
 *  unshift('string')
 *  splice(pInicial, pFinal)
 *  splice(pInicial, pFinal, 'string')
 *  slice(pInicial)
 *  slice(pInicial, pFinal)
 */

//let frutas = new Array('Abacaxi', 'Banana', 'Caronbola', 'Damasco')
const frutas =['Abacaxi', 'Banana', 'Carambola', 'Damasco', 'Embaúba']

//Retira o ultimo elemtneo do array
frutas.pop()
console.log(frutas)

// Adiciona um elemento ao final do array
frutas.push('Embauba')
console.log(frutas)

//Removel o primeiro elemento do array
frutas.shift()
console.log(frutas)

// Adiciona um elmento na primeira posição do array
frutas.unshift('Abacaxi Perola')
console.log(frutas)

// Tanto adiciona quanto remove elementos no array
// Adicionar a partir do elemtneo 5, sem remover nenhum elemento
frutas.splice(5, 0, 'Figo', 'Goiaba')
console.log(frutas)
// Remover
frutas.splice(5, 2)
console.log(frutas)

// A partir do indice indicado forma um novo array
const maisFrutas1 = frutas.slice(2)
console.log(maisFrutas1)

// Pega do indice idicado até o informado
const maisFrutas2 = frutas.slice(2, 4)
console.log(maisFrutas2)


