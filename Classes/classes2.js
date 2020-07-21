class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Chama o construtor da classe pai (Avo) e passa o argumento
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva',) //Chama o construtor da classe pai e passa o argumento
    }
}

const filho = new Filho()
console.log(filho)