function solve(arr) {
    let result = [];

    arr.forEach(x => {
        if (x >= 0) result.push(x);
        else result.unshift(x);
    });

    result.forEach(x => console.log(x));
}

solve(['7', '-2', '8', '9']);