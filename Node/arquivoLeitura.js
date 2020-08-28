const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outra maneira de ler um arquivo JSON, dessa maneira ele ja converte o JSON (string) em objeto
const config = require('./arquivo.json')
console.log(config.db)

// Le os arquivos da pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})