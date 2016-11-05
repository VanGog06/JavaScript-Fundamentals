"use strict";

function sumNumbers(numbers) {
    let firstNumber = Number(numbers[0]);
    let secondNumber = Number(numbers[1]);
    let thirdNumber = Number(numbers[2]);

    let sum = firstNumber + secondNumber + thirdNumber;

    console.log(sum);
}

sumNumbers(["1", "2", "3"]);