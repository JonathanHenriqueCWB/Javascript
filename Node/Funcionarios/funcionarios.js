const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios é um client para fazer requisições http

// Funçoes callback
const filtrarPorGeneroFeminino = f => f.genero === 'F'
const filtrarPorPaisChines = f => f.pais === 'China'
const filtrarMenorSalario = (acumulador, atual) => acumulador.salario < atual.salario ? acumulador : atual

// Requisição com axios
axios.get(url).then(resp => {
    const funcionarios = resp.data
    const resultado = funcionarios.filter(filtrarPorGeneroFeminino).filter(filtrarPorPaisChines).reduce(filtrarMenorSalario)
    console.log(resultado)
});