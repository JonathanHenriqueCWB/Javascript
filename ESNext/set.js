// Estrutura de conjunto não indexada, não aceita repetição

const times = new Set()
times.add('Athletico')
times.add('Coritiba')
times.add('Parana')

times.add('Parana') // Não ira adicionar

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('Coritiba'))

times.delete('Parana')
console.log(times.has('Parana'))
