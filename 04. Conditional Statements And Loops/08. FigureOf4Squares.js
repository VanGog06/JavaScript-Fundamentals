function printFigure([n]) {
    [n] = [n].map(Number);

    let lines = n % 2 == 0 ? n - 1 : n;
    let spaces = ((2 * n - 1) - 3) / 2;

    for(let i = 1; i <= lines; i++) {
        if (i === 1 || i === lines || i === Math.ceil(lines / 2)) {
            console.log('+' + '-'.repeat(spaces) + '+' + '-'.repeat(spaces) + '+');
        } else {
            console.log('|' + ' '.repeat(spaces) + '|' + ' '.repeat(spaces) + '|');
        }
    }
}

printFigure([4]);