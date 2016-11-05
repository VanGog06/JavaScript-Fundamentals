function isOdd([number]) {
    number = Number(number);
    let reminder = number % 2;

    if (reminder == 0) {
        console.log('even');
    } else if (reminder == Math.round(reminder)) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}