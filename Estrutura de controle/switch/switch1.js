const calcularNota = notas => (notas.n1 + notas.n2 + notas.n3) /3
const notas = { n1: 7, n2: 7, n3: 7 }
const resultado = calcularNota(notas)

switch(Math.floor(resultado)){
    case 10:
        console.log('Aprovado nota: ' + resultado)
        break;
    case 9:
        console.log('Aprovado nota: ' + resultado)
        break;
    case 8:
        console.log('Aprovado nota: ' + resultado)
        break;
    case 7:
        console.log('Aprovado nota: ' + resultado)
        break;
    case 6: 
        console.log('Recuperação nota: ' + resultado)
        break;
    case 5:
        console.log('Recuperação nota: ' + resultado)
        break;
    case 4:
        console.log('Reprovado nota: ' + resultado)
        break;
    case 3:
        console.log('Reprovado nota: ' + resultado)
        break;
    case 2:
        console.log('Reprovado nota: ' + resultado)
        break;
    case 1:
        console.log('Reprovado nota: ' + resultado)
        break;
    default:
        console.log('Valor invalido' + resultado)
        break
}