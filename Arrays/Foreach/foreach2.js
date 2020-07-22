// Utilizando array no foreach

const aprovados = ['Andre', 'Ana', 'Marcos', 'Bia', 'Jose', 'Carlos']

/*
aprovados.forEach(function(nome, indice){
    console.log('Exp1: ', indice, nome)
})

aprovados.forEach( a => console.log("Exp2: ", a))

aprovados.forEach(element => {
    console.log('Exp3: ', element)
});
*/

//Ao chamar essa função passar outra função como argumento
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, inice){
    console.log(inice, nome)
})


