// String em javascript

const palavra = "javascript"

//Retorna uma letra correspondente a indice informado
console.log(palavra.charAt(4))

// Retorna o valor do caracter na tabela ascii correspondente ao indice informado
console.log(palavra.charCodeAt(4))

// Retorna o indice do elemento informado
console.log(palavra.indexOf('n'))

// Imprime a string a partir do indice informado, ou até o indice informado
console.log(palavra.substring(1))
console.log(palavra.substring(0, 3))

// Concatenação de strings
console.log('Strings '.concat(palavra).concat('!!!'))

/*
    // Substitui um numero por letra na string
    console.log(palavra.replace(1, 'x'))
    // Substitiu qualquer caracter na string
    console.log(palavra.replace(/\9/g, 3));
*/

// Converte a string em uma array. Estrutura string.split('CriterioDeSeparação')
console.log('Curso de java script'.split(' '))




