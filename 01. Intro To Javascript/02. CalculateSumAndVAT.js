"use strict";

function sumVat(array) {
    let sum = 0;

    for(let number of array) {
        sum += Number(number);
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
}

sumVat(['1.2', '2.6', '3.5']);