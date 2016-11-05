function aggregateTable(array) {
    let towns = [];
    let sum = 0;

    for(let line of array) {
        let currentLine = line.split('|').filter(x => x != '');
        towns.push(currentLine[0].trim());
        sum += Number(currentLine[1]);
    }

    console.log(towns.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);