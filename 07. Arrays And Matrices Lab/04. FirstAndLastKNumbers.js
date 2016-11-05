function solve(array) {
    let size = Number(array.splice(0, 1));

    console.log(array.slice(0, size).join(' '));
    console.log(array.slice(array.length - size, array.length).join(' '));
}

solve(['2', '7', '8', '9']);
solve(['1', '5']);