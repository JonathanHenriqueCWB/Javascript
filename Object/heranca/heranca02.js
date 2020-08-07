// Cadeias de protótipos (prototype chain)
Object.prototype.atributo0 = '0'
const avo = { atributo1: 'A' }
const pai = {
    __proto__: avo, // Herda de avo
    atributo2: 'B'
}
const filho = {
    __proto__: pai, // Herda do pai
    atributo3: 'C'
}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

/*
    Praticamente todos os objetos em JavaScript descendem de Object; todos
    os métodos e propriedades herdados de Object.prototype, embora possam ser sobrescritos
*/
const carro = {
    velAtual: 0,
    velMaxima: 200,

    acelera(delta) {
        ((this.velAtual + delta) <= this.velocidadeMaxima) ? this.velAtual += delta : this.velAtual = this.velocidadeMaxima
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 340,

}
Object.setPrototypeOf(ferrari, carro)

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
ferrari.acelera(300)
console.log(ferrari.status())

console.log(volvo)
volvo.acelera(300)
console.log(volvo.status())
