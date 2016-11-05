function calculate([number1, number2, operator]) {
    [number1, number2] = [number1, number2].map(Number);

    switch(operator) {
        case "*":
            console.log(number1 * number2);
            break;
        case "/":
            console.log(number1 / number2);
            break;
        case "+":
            console.log(number1 + number2);
            break;
        case "-":
            console.log(number1 - number2);
    }
}