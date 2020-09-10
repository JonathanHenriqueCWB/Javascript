// Operador ... rest(juntar)/spread(separar)
// Usar spread com parâmetros de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1000}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

/*
    Diferente do spread o rest junta varios parametros
    em um unico atributo, comumente utilizado para receber varios parâmetros
    em um unico atribtuto

    Os parâmetros serão juntados em um unico array
*/

const nomes = (...nomes) => console.log(nomes)
nomes('Bianca', 'José Carlos', 'Leonardo')