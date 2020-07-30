// Função construtora em javascript e o molde do objeto, equivalete a classe de outras linguagens
function Carro(velocidadeMaxima =200, delta=5){
    // Atributo privado
    let velocidadeAtual =0

    // Método public (this)
    this.acelerar = function(){
        ((velocidadeAtual + delta) <= velocidadeMaxima)? velocidadeAtual += delta : velocidadeAtual = velocidadeMaxima
    }

    this.freiar = function(){
        (velocidadeAtual > delta)? velocidadeAtual -= delta : velocidadeAtual =0
    }

    this.getVelocidade = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.freiar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.freiar()
console.log(ferrari.getVelocidade())

