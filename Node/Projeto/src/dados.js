const sequence = {
    _id: 1,
    get id(){ return this._id++}
}
const produtos = {}

function getProdutos(){
    return Object.values(produtos)
}

function getProdutoById(id){
    return produtos[id] || {}
}

function salvarProduto(p){
    if(!p.id) p.id = sequence.id // Se o produto não tiver id, ira receber um id do objeto sequence
    produtos[p.id] = p
    return p
}

function excluirProduto(id){
    const p = produtos[id]
    delete produtos[id]
    return p
}

module.exports = {salvarProduto, getProdutoById, getProdutos, excluirProduto}