// Arrow Funciton
const soma = (a, b) => a + b
console.log(soma(5, 10))

// Arrow Function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // Tentando forçar o lexico 1 apontar para outro objeto (não irá funcionar)
lexico1()
lexico2()

// Parâmetros default
function log(texto = 'Node'){
    console.log(texto)
}
log ()
log ('Javascript')

// Operador rest
function total(...numeros){
    let total =0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))