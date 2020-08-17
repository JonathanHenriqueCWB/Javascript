class Lancamento{
    constructor(nome ='Generico', valor =0){
        this.nome = nome
        this.valor = valor
    }
}
const salario = new Lancamento('Salario', 4500)
const contaLuz = new Lancamento('Luz', -220)
console.log(salario, contaLuz)

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // Método recebera um ou mais lançamentos e add ao array lançamentos
    addLancamentos(...lancamentos){
        lancamentos.forEach(element =>  this.lancamentos.push(element));
    }

    sumario(){
        let valorConsolidado =0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const contas = new CicloFinanceiro()
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())
