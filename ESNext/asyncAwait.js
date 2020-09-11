const http = require('http')
const { result } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            let resulstado = ''
    
            resp.on('data', dados =>{
                resulstado += dados
            })
    
            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resulstado))
                } catch (error) {
                    reject(error)
                }
            })
    
        })
    })
}

// Recurso ES8
// Objetivo de simplificar o uso de promises
let obterAlunos = async () => {
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')

    return [].concat(tA, tB, tC) // Concatena tudo em um array para retornar
} // retorna uma função AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))