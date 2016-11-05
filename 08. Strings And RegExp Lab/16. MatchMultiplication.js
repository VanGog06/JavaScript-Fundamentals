function matchMultiplication([text]) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;

    text = text.replace(pattern, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}

matchMultiplication(['My bill: 2*2.50 (beer)']);