const carro = {
    _preco: 0,
    _nome: '',

    get nome(){return this._nome},
    set nome(n){this._nome = n},

    get preco(){ return this._preco},
    set preco(p){ this._preco = p}
}

carro.nome = 'Gol'
carro.preco = 50000
console.log(carro.nome, carro.preco)