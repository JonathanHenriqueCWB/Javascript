// Objeto global do node (global)
console.log(global)

// Quando declaramos um modulo dentro de global, qualquer arquivo dentro da aplicação tem acesso!
global.minhaFuncao = {
    nome: 'Andre',
    saudacao(){
        return 'Estou em todos os lugares'
    }
}

console.log(global.minhaFuncao.saudacao())