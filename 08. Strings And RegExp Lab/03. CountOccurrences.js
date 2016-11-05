function countOccurrences([searchFor, str]) {
    let counter = 0;
    let startIndex = -1;

    while (true) {
        startIndex = str.indexOf(searchFor, startIndex + 1);

        if (startIndex == -1) break;
        else counter++;
    }

    console.log(counter);
}

countOccurrences(['thth', 'The quick brown fox jumps over the lay dog.']);