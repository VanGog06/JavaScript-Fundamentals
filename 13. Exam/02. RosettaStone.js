function rosettaStone(input) {
    let size = Number(input.shift());
    let patternMatrix = [];
    let final = [];
    let finalString = '';

    for (let i = 0; i < size; i++) {
        patternMatrix[i] = input.shift().split(' ').map(Number);
    }

    let matrix = input.map(row => row.split(' ').map(Number));
    //console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        final[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            final[i][j] = 0;
        }
    }

    for (let row = 0; row < matrix.length  + size; row += size) {
        for (let col = 0; col < matrix.length + size; col += patternMatrix[0].length) {
            let mat = subMatrix(matrix, row, col, size);
            //console.log(mat);
            //console.log(mat.length);

            if (mat.length > 0) {
                for (let i = 0; i < size; i++) {
                    for (let j = 0; j < patternMatrix[0].length; j++) {
                        //console.log(mat[i][j]);
                        if (isInside(matrix, row + i, col + j)) {
                            let newValue = mat[i][j] + patternMatrix[i][j];

                            if (newValue % 27 == 0) {
                                final[row + i][col + j] = ' ';
                            } else {
                                final[row + i][col + j] = String.fromCharCode(64 + (newValue % 27));
                            }

                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < final.length; i++) {
        for (let j = 0; j < final.length; j++) {
            finalString += final[i][j];
        }
    }

    console.log(finalString);

    function isInside(matrix, currentRow, currentCol) {
        if ((currentRow >= 0 && currentRow < matrix.length) && (currentCol >= 0 && currentCol < matrix.length)) {
            return true;
        }

        return false;
    }

    function subMatrix(matrix, startRow, startCol, size) {
        let subMatrix = [];

        for (let row = 0; row < size; row++) {
            if (row + startRow < matrix.length) {
                subMatrix[row] = [];
            }

            for (let col = 0; col < patternMatrix[0].length; col++) {
                if (isInside(input, row + startRow, col + startCol)) {
                    subMatrix[row][col] = matrix[row + startRow][col + startCol];
                }
            }
        }

        return subMatrix;
    }
}

rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

rosettaStone([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);

rosettaStone(['1',
'1 3 13',
'12 22 14 13 25 0 4 24 23',
'18 24 2 25 22 0 0 11 18',
'8 25 6 26 8 23 13 4 14',
'14 3 14 10 6 1 6 16 14',
'11 12 2 10 24 2 13 24 0',
'24 24 10 14 15 25 18 24 12',
'4 24 0 8 4 22 19 22 14',
'0 11 18 26 1 19 18 13 15',
'8 15 14 26 24 14 26 24 14']);