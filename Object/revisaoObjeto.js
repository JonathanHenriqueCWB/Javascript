// Coeleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Artesanal'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

// Um objeto pode conter objetos internos e funções
const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mario',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 1234
        },
        condutores: [{
            nome: 'Junior',
            idade: 49
        },{
            nome: 'Bia',
            idade: 24
        }],
        calcularValorSeguro(){
            // ...
        }
    }
}

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = 'Av Manoel Ribas'
console.log(carro)

delete carro.proprietario.condutores
delete carro.proprietario.endereco
delete carro.proprietario.calcularValorSeguro
console.log(carro)