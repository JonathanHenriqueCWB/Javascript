// Armazenando uma função em uma variável

// Como a funçao vai ser armazenada utilizamos funções anônimas
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(13, 56)

// Armazenamento em funções Arrow
const somar1 = (a, b) => {
    return a + b
}
// Com retorno implicito (somente uma linha)
const somar2 = (a, b) => console.log(a + b)
somar2(15, 15)

const imprimir = args => console.log(args)
imprimir('Arrow Function')
