function printSmallestTwoNumbers(array) {
    let result = array.sort((a, b) => a - b);

    console.log(result.splice(0, 2).join(' '));
}