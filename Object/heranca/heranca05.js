	// Toda função tem um atributo chamado prototype
	console.log(typeof String)
	console.log(typeof Array)
    console.log(typeof Object)
    
    // Criando um reverse no prototype de string
    String.prototype.reverse = function (){
    	return this.split('').reverse().join('')
    }    
    console.log('Escola Cod3r'.reverse())
    
    // Criando um função no prototype do Array 
    Array.prototype.first = function(){
    	return this[0]
    }
    console.log([1, 2, 3, 4, 5].first())
    
    // Nesse casso toString já existe, estaremos apenas auterando
    String.prototype.toString = function(){
    	return 'Não faça isso!!!'
    }
    console.log('Escola cod3r'.reverse()) // Afetará varias função de String