// let const
    {
        var a =5
        let b =10
        console.log(b)
    }
    console.log(a)

// Template String
    const produto = 'iPad'
    console.log(`produo: ${produto}`)

// Destructuring
    const [l, e, ...tras] = 'Cod3r'
    console.log(l, e, tras)

    const [PrimeiraLetra, ...resto] = 'Outro exemplo'
    console.log(PrimeiraLetra, resto)

    const [x, ,y] = [1, 2, 3]
    console.log(x, y)

    const {idade: i, nome} = {nome: 'Ana', idade: 9}
    console.log(i, nome)