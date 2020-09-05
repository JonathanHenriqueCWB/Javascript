/*
    Estrutura dinâmica chave e valor, se diferencia de um objeto pelo fado
    de que no caso do objeto a chave é apenas um literal, já no map pode variar
    como função, número ou até mesmo um objeto

    O primeiro valor sempre será a chave
*/
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() { }, 'funcao'],
    [{}, 'Objeto'],
    [123, 'Numeros']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
console.log(chavesVariadas.has(123)) // Procura o elemento de indice indicado
chavesVariadas.delete(123) // exclui um elemento do map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Mostra quantidades de elementos no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Não há duplicidade, irá sobrescrever
console.log(chavesVariadas)