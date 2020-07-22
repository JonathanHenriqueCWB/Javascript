/*
    Irá imprimeir com valor undefied, mais a variavel já existe
    Se comentar a linha de baixo dará erro
    Isso acontece pelo hoisting que joga a declaração da variavel para cima
    ou seja será declarada antes
*/
/*
    var a
    console.log('a= ', a)
    a = 2
    console.log('a= ', a)
*/
console.log('a= ', a)
var a = 2
console.log('a= ', a)

// Esse efeito só acontece com variaveis declaradas com var