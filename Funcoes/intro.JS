// Declarando frunção de forma literar
function funcao() {}

// Declarando a funçaõ em uma variavel
const minhaFuncao = function() {}

// Declarando função e armazenando em um array
const array = [function(a,b) {return a+b}, funcao, minhaFuncao]
console.log(array[0](1,2))

// Armazenar em um atributo de objeto
const obj = { falar: function() {return 'Função armazenada em um atributo de objeto'} }
obj.func = funcao
obj.minhaFunc = minhaFuncao
console.log(obj.falar())

// Passando uma função como parametro para outra função
function run(func){
    func()
}
run(function(){console.log('Funcão passada como parametro!!!')})

// Uma função pode retornar/conter outra função
function somar (a, b){
    return function(c){
        console.log('Valor da soma dos tres parametros: ' + (a+b+c))
    }
}
somar(5, 5)(10)

/**
 *  Para pode executar a função e necessario colocar os (), caso contrario apenas estará referenciando a função em si, e não executando
 *  Toda função em js tem um retorno
 *  Funções sem o retorno explicito retornam indefinido
 */