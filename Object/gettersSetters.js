const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor) this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 50 // Não será atribuida, pois não respeita a condição do set valor
console.log(sequencia.valor, sequencia.valor)

// Nome dos atributos não poder ser iguais aos dos metodos get e set