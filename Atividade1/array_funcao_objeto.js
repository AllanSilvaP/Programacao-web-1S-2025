let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

function imprimirMatriz (matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linhaMatriz = ""
        for (let j = 0; j < matriz[i].length; j++) {
               linhaMatriz += matriz[i][j] + "\t"
        }
        console.log(linhaMatriz)
    }
}

imprimirMatriz(matriz)

//MAPAS

let capitais = {
    DF: "Brasília", DDD_DF: 61,
    SP: "São Paulo", DDD_SP: 11,
    RJ: "Rio de Janiero", DDD_RJ: 21
}

console.log(capitais.DF + " - " + capitais.DDD_DF)

for (const key in capitais) {
    console.log(key + " - " + capitais[key])
}