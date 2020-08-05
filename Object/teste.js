const carro = {
    velocidade: 0,
    velocidadeMaxima: 200,

    acelerar(delta){
        (this.velocidade + delta <= this.velocidadeMaxima)? this.velocidade += delta : this.velocidade = this.velocidadeMaxima
    },
    status(){
        return `Velocidade atual: ${this.velocidade}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}
const ferrari = {
    nome: 'F40',
    velocidadeMaxima: 340
}
Object.setPrototypeOf(ferrari, carro)

ferrari.acelerar(230)
console.log(ferrari.status())

const  volvo = {
    nome: 'V40',
    status(){
        return `${this.nome} ${super.status()}`
    }
}
Object.setPrototypeOf(volvo, carro)

volvo.acelerar(240)
console.log(volvo.status())