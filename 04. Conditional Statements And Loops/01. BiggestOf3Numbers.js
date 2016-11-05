function biggestNumber([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);

    console.log(Math.max(a, Math.max(b, c)));
}

biggestNumber(['5', '-2', '7']);