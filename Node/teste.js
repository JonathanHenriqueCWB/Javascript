const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const calcularMedia = (acumulado, atual) => acumulado + atual

axios.get(url).then(resp => {
    const funcionarios = resp.data
    const media = funcionarios.map(f => f.salario).reduce(calcularMedia)
    console.log((media/funcionarios.length).toFixed(2))
})