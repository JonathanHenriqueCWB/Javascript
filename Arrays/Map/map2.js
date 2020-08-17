const carrinho = [
    '{"nome": "Borracha", "preco": 3.54}',
    '{"nome": "Apontador", "preco": 1.50}',
    '{"nome": "Caderno", "preco": 29.90}',
    '{"nome": "Lapis", "preco": 0.50}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Função callback, coverter Array de JSON em Array de Object
const converterParaObjeto = e => JSON.parse(e)
// Função callback, filtrar Array de Objetos
const filtrarPreco = e => e.preco

const resultado = carrinho.map(converterParaObjeto).map(filtrarPreco)
console.log('Resultado final: ', resultado)
