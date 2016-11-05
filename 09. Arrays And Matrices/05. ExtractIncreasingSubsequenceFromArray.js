function extract(array) {
    let biggestNumber = array[0];
    let result = [biggestNumber];

    for (let i = 1; i < array.length; i++) {
        if (Number(biggestNumber) <= Number(array[i])) {
            result.push(array[i]);
            biggestNumber = array[i];
        }
    }

    return result.join('\n');
}

console.log(extract(['2', '1', '8', '4', '10', '12', '3', '2', '24']));