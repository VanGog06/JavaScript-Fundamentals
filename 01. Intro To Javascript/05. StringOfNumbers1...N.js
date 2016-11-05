"use strict";

function stringOfNumbers(n) {
    let str = '';

    for(let i = 1; i <= n; i++) {
        str += i;
    }

    return str;
}

stringOfNumbers('11');