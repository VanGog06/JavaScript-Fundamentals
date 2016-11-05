function sum(array) {
    let matrix = array.map(r => r.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (row == col ) mainSum += matrix[row][col];
            if (col == matrix.length - row - 1) secondarySum += matrix[row][matrix.length - row - 1];
        }
    }

    console.log(mainSum + " " + secondarySum);
}

sum(['20 40', '10 60']);