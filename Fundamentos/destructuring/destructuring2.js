// Desestruturando dados

//Criando um array e declarando um valor
const [a] = [10]
console.log(a)

//Pulando elementos no array, valores vaizio entre virgual no array
const[n1, ,n3, ,n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Array com array, sendo que o primeiro valor será ignorado 
const[, [, nota]] = [[ ,8, 8], [9, 6, 8]]
console.log(nota)