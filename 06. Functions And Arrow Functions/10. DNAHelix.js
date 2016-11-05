function drawDNA([size]) {
    let pattern = "ATCGTTAGGG";
    let startIndex = 0;
    let row = 1;

    for(let i = 0; i < size; i++) {
        let firstLetter = getLetter(pattern, startIndex);
        startIndex++;

        if (startIndex >= pattern.length) {
            startIndex = 0;
        }

        let secondLetter = getLetter(pattern, startIndex);

        startIndex++;

        if (startIndex >= pattern.length) {
            startIndex = 0;
        }

        if (row == 1) {
            console.log(`**${firstLetter}${secondLetter}**`);
        } else if (row == 2 || row == 4) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        } else if (row == 3) {
            console.log(`${firstLetter}----${secondLetter}`);
        }

        row++;

        if (row > 4) row = 1;
    }

    function getLetter(pattern, startIndex) {
        return pattern.slice(startIndex, startIndex + 1);
    }
}

drawDNA(['10']);