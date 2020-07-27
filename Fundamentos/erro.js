function tratarErro(erro) {
    //throw new Error('Erro parametro invalido!!!')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) {
        tratarErro(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Bia'}
imprimirNome(obj)