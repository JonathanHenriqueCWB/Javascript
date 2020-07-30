const notas = [7.7, 6.8, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasBaixas = []

// SEM CALLBACK

//For
for(let i=0; i<notas.length; i++){
    if(notas[i] < 7) notasBaixas.push(notas[i])
}
console.log('For: ' + notasBaixas)

notasBaixas = []

//Forin
for(let i in notas){
    if(notas[i] < 7) notasBaixas.push(notas[i])
}
console.log('Forin: ' + notasBaixas)
notasBaixas =[]

//Foreach
notas.forEach(element => {
    if(element < 7) notasBaixas.push(element)
});
console.log('Foreach: ' + notasBaixas)
notasBaixas =[]

// COM CALLBACK

// Nesse caso o array recebera o retorno da função anonima
notasBaixas = notas.filter(function(n){
    return n < 7
})
console.log('Callback: ' + notasBaixas)

const notasBaixas2 = notas.filter(n => n < 7)
console.log('Callback arrow function: ' + notasBaixas2)


