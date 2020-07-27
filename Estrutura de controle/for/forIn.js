//Foreach percorrendo um array
const nomes = ['Joao', 'Bia', 'Marcelo', 'Luiz']

nomes.forEach(element => {
   console.log('Foreach: ' + element) 
});


//For/In percorrendo os atributos de um objeto
const pessoa ={
    nome: 'Bia',
    sobrenome: 'Nunes',
    idade: 24
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
