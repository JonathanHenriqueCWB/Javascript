// Funções tipo arrow

let dobro = function (a) {
    return 2*a
}

dobro = (a) => {
    return 2*a
}

//Utilizado em funções em uma unica linha
dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Hello'
}

ola = () => 'Hello'

console.log(ola())