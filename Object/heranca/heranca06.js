// OPERADOR NEW

function Aula(nome, videoID){
	this.nome = 'nome'
    this.videID = videoID
}

const aula1 = new Aula('Bem vindo', 1234)
const aula2 = new Aula('Ate breve', 5678)

console.log(aula1, aula2)

// Simulando o operador new
function novo(f, ...params){
	const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)