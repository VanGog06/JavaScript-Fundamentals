function printTriangleOfDollars([n]) {
    n = [n].map(Number);

    for(let i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
    }
}

printTriangleOfDollars(['5']);