const { resolve } = require("path");

function falar(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos)
    })
}

falar(3, 'texto').then(frase => frase.concat('!!!')).then(outraFrase => console.log(outraFrase)).catch(e => console.log(e))