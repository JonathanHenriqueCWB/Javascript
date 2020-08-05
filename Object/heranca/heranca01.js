const ferrari ={
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Acessa o objeto pai (Prototype)
console.log(ferrari.__proto__) // Nesse caso um objeto vazio {}
// Um objeto criado por padrão aponta para o Object.prototype
console.log(ferrari.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)