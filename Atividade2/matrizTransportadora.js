var array = [[1,2], [3,4], [5,6]]

function transporMatriz(array) {
    console.log('Matriz\n')

    for (let i = 0; i < array.length; i++) {
        let linha = ''
        for (let j = 0; j < array[i].length; j++) {
            linha += array[i][j] + "\t"
        }
        console.log (linha)
    }
    console.log('')

    //transpor matriz

    console.log("============= MATRIZ TRANSPOSTA =============", end="\n")

    for (let j = 0; j < array[j].length; j++) {
        let linha = ''
        for (let i = 0; i < array.length; i++) {
            linha += array[i][j] + "\t"
        }
        console.log (linha)
    }
}

transporMatriz(array)
