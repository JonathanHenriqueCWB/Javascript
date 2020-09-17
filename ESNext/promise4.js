const { resolve } = require("path")

function gerarUmNumero(min, max, tempo){
    if(min > max) [max, min] = [min, max]

    return new Promise(function(resolve){
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(min, max, tempo){
    return Promise.all([
        gerarUmNumero(1, 60, 1000),
        gerarUmNumero(1, 60, 2000),
        gerarUmNumero(1, 60, 3000),
        gerarUmNumero(1, 60, 4000),
        gerarUmNumero(1, 60, 5000),
        gerarUmNumero(1, 60, 6000),
    ])
}
gerarVariosNumeros().then(console.log)