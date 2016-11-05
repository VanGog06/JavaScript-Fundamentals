function wordOccurrences([sentence, word]) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');

    return sentence.match(regex) != null ? sentence.match(regex).length : 0;
}

console.log(wordOccurrences(['There was one. Therefore I bought it. I wouldn\'t buy it otherwise.', 'there']));

