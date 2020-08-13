const pai = {nome: 'Pedro', corCabelo: 'preto'}

// Cria um objeto já tendo como prototipo pai outro objeto
const filha1 = Object.create(pai)
filha1.nome = 'Bia'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Ana', writable: false, enumerable: true}
})

console.log(filha2.nome)
// filha2.nome = 'Carla'
// console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Imprimindo no forin
for (const key in filha1) {
    (filha1.hasOwnProperty(key)) ? console.log(key) : console.log(`Por herança: ${key}`)   
}