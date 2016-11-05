function isMagic(array) {
    let matrix = array.map(row => row.split(' ').map(Number));
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        if (sum != matrix[i].reduce((a, b) => a + b)) return false;

        let columnSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            columnSum += matrix[j][i];
        }

        if (columnSum != sum) return false;
    }

    return true;
}

console.log(isMagic(['1 0 0',
    '0 0 1',
    '0 1 0']
));