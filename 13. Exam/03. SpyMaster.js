function spyMaster(input) {
    let specialKey = input.shift();
    let regExp = new RegExp('(\\b| )' + specialKey + '[ ]+([A-Z!#$%]{8,})( |\.|,|\\b)', 'gmi');
    let final = input.join('\n');
    let match;

    while (match = regExp.exec(input)) {
        let currentMatch = match[2];

        if (currentMatch.toUpperCase() == currentMatch) {
            let replacement = '';
            //console.log(currentMatch);

            for (let i = 0; i < currentMatch.length; i++) {
                switch (currentMatch[i]) {
                    case "!":
                        replacement += "1";
                        break;
                    case "%":
                        replacement += "2";
                        break;
                    case "#":
                        replacement += "3";
                        break;
                    case "$":
                        replacement += "4";
                        break;
                    default:
                        replacement += currentMatch[i].toLowerCase();
                        break;
                }
            }
            //console.log(replacement);
            final = final.replace(currentMatch, replacement);
        }
    }

    console.log(final);
}

spyMaster(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);

spyMaster(['enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.']);