let num1, num2, soma

num1 = 10
num2 = 15

const operacoes = ["Adicao", "Subtração", "Multiplicação", "Divisão"]

function imprimirResultado (num1, num2, resultado, operacao) {
    console.log(`O resultado da ${operacao} entre ${num1} e ${num2} é ${resultado}`)
}

// adicao
resultado = num1 + num2
imprimirResultado(num1, num2, resultado, operacoes[0])
console.log('teste')
//subtração
resultado = num1 - num2
imprimirResultado(num1, num2, resultado, operacoes[1])

//multiplicação
resultado = num1 * num2
imprimirResultado(num1, num2, resultado, operacoes[2])

//divisão
resultado = num1 / num2
imprimirResultado(num1, num2, resultado, operacoes[3])