	function meuObjeto(){}
	console.log(meuObjeto.prototype)

	const obj1 = new meuObjeto
	const obj2 = new meuObjeto
	console.log(obj1.__proto__ === obj2.__proto__)
    console.log(meuObjeto.prototype === obj1.__proto__)
    
    // Passando um atributo para o prototype dos objetos referenciados
    meuObjeto.prototype.nome = 'anônimo'
    meuObjeto.prototype.falar = function(){
    	console.log(`Bom dia meu nome é: ${this.nome}`)
    }
    
    console.log(obj1.falar())
    
    obj2.nome = 'Rafael'
    console.log(obj2.falar())
    
    const obj3 = {}
    obj3.__proto__ = meuObjeto.prototype
    obj3.nome = 'Bia'
    console.log(obj3.falar())
    
    // RESUMO
    console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
    console.log(meuObjeto.__proto__ === Function.prototype)
    console.log(Function.prototype.__proto__ === Object.prototype)
    console.log(Object.prototype.__proto__ === null)
/**
    Quando criamos um objeto a partir de uma função construtora
    utilizando o comando new, o prototipo desse objeto apontará para
    a função que o criou (seu prototype )
 */