// JSON VS Object
// Transforma UM OBJETO em JSON (TEXTUAL)
const pessoa = {nome: 'Bia', idade: 27}
const objNumerico = {a: 1, b: 2, c: 3, somar(){ return a + b + c }}

console.log(JSON.stringify(objNumerico))

// Transforma um JSON em OBJETO
const texto = '{"nome": "bia", "idade": "27"}'

console.log(JSON.parse(texto))
console.log(JSON.parse('{"a": 1, "b": 2.5, "c": 3, "d": true, "e":{}, "f": []}'))

/**
 * Um json pode conter arrays ou objetos
 * não pode conter funções
 * nomes das propriedades devem ser dados em string com aspas duplas
 */