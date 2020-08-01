/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
    A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/
/*
    C = CAPITAL
    I = TAXA
    T = TEMPO
    M = MONTANTE
*/

// Calculo de juros simples. FORMULA: J = capital*taxa*tempo, basta multiplicar o juros pela capital e teremos o montante
const simples = (c, i, t) => ((c * i * t) + c)
// const jurosSimples = (capital, taxa, tempo) =>{
//     const juros = capital * taxa * tempo
//     const montante = capital + juros
//     return montante
// }
const jurosSimples = simples(2500, 0.005, 8)
console.log('Juros simples: ' + jurosSimples)

// Calculo de juros compostos. FORMULA M = (1+t) elevado ao tempo
const composto = (c, i, t) => c * Math.pow((1 + i), t)
// const composto = (capital, taxa, tempo) => {
//     const montante = capital * Math.pow((1 + taxa), tempo)
//     return montante
// }
const jurosComposto = composto(100, 0.10, 3)
console.log('Juros composto: ' + jurosComposto)

