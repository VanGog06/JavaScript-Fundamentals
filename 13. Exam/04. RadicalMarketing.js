function radicalMarketing(input) {
    let subscribers = new Map();

    for (let command of input) {
        let splittedCommand = command.split('-');

        if (splittedCommand.length == 1) {
            if (!subscribers.has(splittedCommand[1])) {
                subscribers.set(splittedCommand[0], new Set());
            }
        } else {
            if ((splittedCommand[0] == splittedCommand[1])) continue;
            if (!subscribers.has(splittedCommand[0]) && !subscribers.has(splittedCommand[2])) continue;

            subscribers.get(splittedCommand[1]).add(splittedCommand[0]);
        }
    }

    let keys = subscribers.keys();

    keys = [...keys].sort(function(a, b) {
        if ((subscribers.get(b).size - subscribers.get(a).size) != 0) {
            return subscribers.get(b).size - subscribers.get(a).size;
        } else {
            return countNumberOfSubscriptions(subscribers, a, b);
        }
    });

    console.log(keys[0]);
    let counter = 1;

    for (let currentValue of subscribers.get(keys[0])) {
        console.log(counter + ". " + currentValue);
        counter++;
    }

    console.log(subscribers);

    function countNumberOfSubscriptions(subscribers, firstKey, secondKey) {
        let firstCounter = 0;
        let secondCounter = 0;

        for (let value of subscribers.values()) {
            if (value.has(firstKey)) firstCounter++;
            if (value.has(secondKey)) secondCounter++;
        }

        return firstCounter < secondCounter;
    }
}

radicalMarketing(['A',
    'B',
    'B',
    'C',
    'D',
    'Z-X',
    'B-A',
    'C-A',
    'D-A']);

radicalMarketing(['J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J']);