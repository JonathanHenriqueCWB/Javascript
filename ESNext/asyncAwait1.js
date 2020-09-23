function imprimir(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => resolve('Função executada com sucesso!'), tempo)
    })
}
function label (){
    return new Promise(resolve => {
        resolve(10)
    })
}

// imprimir(2000).then(console.log).then(imprimir).then(console.log).then(imprimir).then(console.log)

async function mostrar(){
    const valor = await label()

    await imprimir(1500)
    console.log(`Async/Await 1... ${valor}`)

    await imprimir(1500)
    console.log(`Async/Await 1... ${valor + 1}`)

    await imprimir(1500)
    console.log(`Async/Await 1... ${valor + 2}`)
}
mostrar()