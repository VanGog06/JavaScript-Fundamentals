function getNumbers(array) {
    let regex = /\d+/g;
    let result = '';

    for (let line of array) {
        while (row = regex.exec(line)) {
            result += row[0] + ' ';
        }
    }

    return result;
}