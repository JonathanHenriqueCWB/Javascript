// setTimeout(function(){
//     console.log('Executando callback...')
//     setTimeout(function(){
//         console.log('Executando callback novamente...')
//         setTimeout(() => console.log('Executando callback pela ultima vez'),2000) // Arrow Function
//     },2000)
// },2000)

// Função, recebe um tempo em mileseguntos e retorna uma promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('asdf')
        }, tempo)
    })
}

esperarPor().then(() => esperarPor()).then(() => esperarPor())