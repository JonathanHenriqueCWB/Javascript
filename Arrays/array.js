//Array em javascript são tratados como objetos

// Declaração de array
let frutas = new Array('Banana', 'Tomate', 'Cereja')
let esportes = new Array('Futebol', 'Basquete', 'Volei')

frutas = ['Abacaxi', 'Laranja', 'Maça']
esportes = ['Tenis', 'Futebol Americano', 'Corrida']

//Forma normal de criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Forma literal de crar um array, mais recomendada.
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Mario')

aprovados[9] = 'Jose'
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[7] === undefined)

//Ordenando o array
aprovados.sort()
console.log(aprovados)

//Deletando elemento de um array
delete aprovados[0]
console.log(aprovados[0])

//A partir do inice idicado exclui a quantidade de elementos indicado
// array.splice(indice, qtdElementos)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1 , 2)

