function match([input]) {
    return input.match(/[0-9a-zA-Z_]+/g).join('|');
}

console.log(match(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']));
console.log(match(['Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !']));