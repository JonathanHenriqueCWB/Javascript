const carro = {
    _valor: 0,
    get valor(){
        return this._valor
    },
    set valor(v){
        if(v > 0){
            this._valor = v
        }
    } 
}

carro.valor = 50000
console.log(carro.valor)