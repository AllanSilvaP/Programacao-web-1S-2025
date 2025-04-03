function verificarNumeroPrimo(num) {
    if (num <= 2) {
        console.log('Seu numero nao e primo')
    } else {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                return false
            }
            return true
        }
    }
}

console.log(verificarNumeroPrimo(12))
console.log(verificarNumeroPrimo(3))