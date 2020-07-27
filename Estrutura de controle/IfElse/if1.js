function verificarNota(notas){
    const resultado = calcularNota(notas)

    if(resultado >= 7){
        console.log('Aprovado nota: ' + resultado)
    }else if(resultado >=5 && resultado < 7){
        console.log('Recuperação nota: ' + resultado)
    }else{
        console.log('Reprovado nota: ' + resultado)
    }
}
const calcularNota = obj => (obj.n1 + obj.n2 + obj.n3) / 3

notas = { n1: 7, n2: 7, n3: 7 }
verificarNota(notas)