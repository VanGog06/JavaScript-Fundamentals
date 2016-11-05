function equalNumber(array) {
    let matrix = array.map(r => r.split(' '));
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row != matrix.length - 1 && col != matrix[row].length - 1) {
                if (equals(matrix[row][col], matrix[row][col + 1])) counter++;
                if (equals(matrix[row][col], matrix[row + 1][col])) counter++;
            } else if (row == matrix.length - 1 && col != matrix[row].length - 1) {
                if (equals(matrix[row][col], matrix[row][col + 1])) counter++;
            } else if (col == matrix[row].length - 1 && row != matrix.length - 1) {
                if (equals(matrix[row][col], matrix[row + 1][col])) counter++;
            }
        }
    }

    console.log(counter);

    function equals(a, b) {
        return a == b;
    }
}

/*equalNumber(['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4']
);*/

equalNumber(['test yes yo ho',
        'well done yo 6',
        'not done 5 6']
);