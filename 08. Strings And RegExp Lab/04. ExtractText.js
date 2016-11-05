function extractText([text]) {
    let startIndex = -1;
    let endIndex = -1;
    let result = [];

    while (true) {
        startIndex = text.indexOf('(', endIndex + 1);
        if (startIndex == -1) break;

        endIndex = text.indexOf(')', startIndex + 1);
        if (endIndex == -1) break;

        result.push(text.substring(startIndex + 1, endIndex));
    }

    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);