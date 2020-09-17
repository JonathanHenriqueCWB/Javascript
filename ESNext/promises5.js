const { resolve } = require("path");

function funcionar(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else {
            resolve(valor)
        }
    })
}

funcionar('Somente um teste', 0.1)
    .then(valor => `Valor: ${valor}`)
    .catch(erro => console.log(`Erro: ${erro}`))