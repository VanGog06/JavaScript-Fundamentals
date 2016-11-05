"use strict";

function countLetter(text, letter) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (letter == text[i]) {
            count++;
        }
    }

    console.log(count);
}

countLetter('hello', 'l');