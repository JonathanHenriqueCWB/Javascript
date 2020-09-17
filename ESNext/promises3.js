function gerarNumeros(min, max){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeros(1, 10).then(num => num*100).then( numX10 => `O numero foi multiplicado por 100: ${numX10}`).then(console.log)
