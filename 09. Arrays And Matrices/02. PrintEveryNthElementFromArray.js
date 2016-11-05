function print(array) {
    let step = array.pop();

    return array.filter((x, i) => i % step == 0).join('\n');
}

console.log(print(['5', '20', '31', '4', '20', '2']));