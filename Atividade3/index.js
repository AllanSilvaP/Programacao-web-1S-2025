

const express = require('express')
const calculadora = require('./util/calculadora.js')
const app = express()

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})

app.get('/', (req, res) => {
    res.send(`
        <h1>SEJA BEM VINDO A CALCULADORA!</h1>
        <p>Para somar digite na barra de pesquisa acima http://localhost:8080/somar/Num1/Num2</p>
        <p>Para subtrair digite na barra de pesquisa acima http://localhost:8080/subtrair/Num1/Num2</p>
        <p>Para multiplicar digite na barra de pesquisa acima http://localhost:8080/multiplicar/Num1/Num2</p>
        <p>Para dividir digite na barra de pesquisa acima http://localhost:8080/dividir/Num1/Num2</p>
        `)
})

app.get('/somar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    }
    const resultado = calculadora.somar(num1, num2)
    res.send(`
        <h3>Resultado da soma: ${resultado}</h3>
        <p>Deseja voltar? Escreva http://localhost:8080/ !</p>
        `)
})

app.get('/dividir/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    }
    const resultado = calculadora.dividir(num1, num2)
    res.send(`
        <h3>Resultado da soma: ${resultado}</h3>
        <p>Deseja voltar? Escreva http://localhost:8080/ !</p>
        `)
})

app.get('/subtrair/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    } else if (num2 == 0){
        return res.status(400).send('Não há como dividir por 0')
    }
    const resultado = calculadora.subtrair(num1, num2)
    res.send(`
        <h3>Resultado da subtração: ${resultado}</h3>
        <p>Deseja voltar? Escreva http://localhost:8080/ !</p>
        `)
})

app.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    }
    const resultado = calculadora.multiplicar(num1, num2)
    res.send(`
        <h3>Resultado da soma: ${resultado}</h3>
        <p>Deseja voltar? Escreva http://localhost:8080/ !</p>
        `)
})
