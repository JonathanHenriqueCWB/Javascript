function sortearNumero(min, max){
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

let contador

do{
    contador = sortearNumero(1, 10)
    console.log('Numero sorteado '+ contador)

}while(contador != 1)