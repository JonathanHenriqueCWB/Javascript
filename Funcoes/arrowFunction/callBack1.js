const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Ford']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
    
}

// Nesse caso o função pega o indice automaticamente
fabricantes.forEach(imprimir)
fabricantes.forEach(element => console.log(element))
