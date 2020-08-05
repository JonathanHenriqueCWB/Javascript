// Cadeias de protótipos (prototype chain)

// Prototype com __proto__
Object.prototype.atributo0 = '0'
const avo = {
    atributo1: 'A'
}
const pai = {
    __proto__: avo, // Herda de avo
    atributo2: 'B'
}
const filho = {
    __proto__: pai, // Herda do pai
    atributo3: 'C'
}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)


// Outro exemplo
const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelera(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 340, // shadowing

}
const volvo = {
    modelo: 'V40',
    status(){ // shadowing
        return `${this.modelo}: ${super.status()}` // Exibir o modelo e todo codigo do function status de carro
    }
}
// Estabelecendo a relação do prototype de carro com ferrari e volvo
Object.setPrototypeOf(ferrari, carro) // Esse comando informa que prototype será o carro
Object.setPrototypeOf(volvo, carro) // Esse comando informa que prototype será o carro

/*
    Por padrão irá exibir somente os atributos e métodos do proprio objeto, mais pode ser acessado 
    os atributos e métodos do objeto pai 
*/
console.log(ferrari)
ferrari.acelera(300)
console.log(ferrari.status())

console.log(volvo)
volvo.acelera(300) // Nao sera permetido
console.log(volvo.status())
