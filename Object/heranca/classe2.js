class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

// herança de avo
class Pai extends Avo{
    constructor(sobrenome, profissao ='Professor'){
        super(sobrenome) // chama a função construtora da superclasse
        this.profissao = profissao
    }
}

// herança de pai
class Filho extends Pai{
    constructor(){
        super('Lima', 'Programador')
    }
}

const pai = new Pai
const filho = new Filho
console.log(filho)