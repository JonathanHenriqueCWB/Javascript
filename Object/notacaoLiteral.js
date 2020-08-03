const a=1, b=2, c=3

const obj1 = {a:a, b:b, c:c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3 [nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){
        // ES6
    }
}
console.log(obj5)

// Deletar esse código
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)