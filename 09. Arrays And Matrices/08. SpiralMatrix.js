function spiralMatrix([dimension]) {
    [rows, cols] = dimension.split(' ');
    let matrix = [];
    let number = 1;
    let currentRow = 0;
    let currentCow = 0;

    while (number <= rows * cols) {
        matrix[currentRow][currentCow] = number;

    }
}

spiralMatrix(['5 5']);