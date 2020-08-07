/*
    Praticamente todos os objetos em JavaScript descendem de Object; todos
    os métodos e propriedades herdados de Object.prototype, embora possam ser sobrescritos
*/
const avo = {
    atributo1: 'Atributo do Avô',
}
const pai = {
    __proto__: avo,
    atributo2: 'Atributo do Pai'
}
const filho = {
    __proto__: pai,
    atributo3: 'Atributo do Filho'
}
const cunhado = {
    atributo4: 'Cunhado não e parente'
}
console.log(filho.atributo1, filho.atributo2, filho.atributo3)
console.log(cunhado.atributo1)
console.log(Object.prototype.__proto__)



const carro = {
    velocidade: 0,
    velocidadeMaxima: 200,

    acelerar(delta) {
        ((this.velocidade + delta) <= this.velocidadeMaxima) ? this.velocidade += delta : this.velocidade = this.velocidadeMaxima
    },
    status() {
        return `Velocidade atual do veiculo: ${this.velocidade}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    nome: 'F40',
    velocidadeMaxima: 340
}
Object.setPrototypeOf(ferrari, carro)
ferrari.acelerar(300)
console.log(ferrari.status())

const volvo = {
    nome: 'V40',
    status() {
        return `${this.nome} ${super.status()}`
    }
}
Object.setPrototypeOf(volvo, carro)
volvo.acelerar(300)
console.log(volvo.status())