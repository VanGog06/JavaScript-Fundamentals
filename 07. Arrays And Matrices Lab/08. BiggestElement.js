function biggestElement(array) {
    let matrix = array.map(x => x.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum, c)));

    console.log(biggestNum);
}

biggestElement(['1 2 3', '1 3 5']);