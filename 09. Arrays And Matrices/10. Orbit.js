function orbit([size, coordinates]) {
    [rows, cols] = size.split(' ').map(Number);
    [startRow, startCol] = coordinates.split(' ').map(Number);
    let matrix = [];
    let result = '';

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(startRow - row),Math.abs(startCol - col)) + 1;
            result += matrix[row][col] + ' ';
        }

        result += '\n';
    }

    return result;
}

console.log(orbit(['4 4', '0 0']));