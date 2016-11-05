function matchDate(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    for (let sentence of input) {
        while (match = pattern.exec(sentence)) {
           console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}

matchDate(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);
matchDate(['1-Jun-2012 is before 14-Feb-2016']);