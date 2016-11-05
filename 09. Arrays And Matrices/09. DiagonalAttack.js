function diagonalAttack(array) {
    let matrix = array.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i == j) mainDiagonalSum += matrix[i][j];
            if (j == matrix.length - i - 1) secondaryDiagonalSum += matrix[i][j];
        }
    }

    if (mainDiagonalSum == secondaryDiagonalSum) {
        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i != j && j != matrix.length - i - 1) matrix[i][j] = mainDiagonalSum;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        let row = '';

        for (let j = 0; j < matrix.length; j++) {
            row += matrix[i][j] + ' ';
        }

        console.log(row);
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);