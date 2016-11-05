function processOddNumbers(array) {
    let result = array
        .filter((num, i) => i % 2 != 0)
        .map(num => Number(num) + Number(num))
        .reverse();

    console.log(result.join(' '));
}