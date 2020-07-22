// Trabalhando com array no foreach

//const frutas = new Array('Abacate', 'Carambola', 'Damasco', 'Embauba', 'Figo', 'Goiaba', 'icaco')
const frutas = ['Abacate', 'Carambola', 'Damasco', 'Embauba', 'Figo']


frutas.forEach(element => console.log(element));

frutas.forEach(element => {
    console.log(element)
});

frutas.forEach(function (nome, indice) {
    console.log(`${indice} ${nome}`)
})

//Armazenando uma função em uma constante e passando para o foreach
const exibirFrutas = asdf => console.log(asdf)
frutas.forEach(exibirFrutas)
