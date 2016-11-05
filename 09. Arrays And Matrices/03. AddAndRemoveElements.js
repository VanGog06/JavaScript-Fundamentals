function solve(array) {
    let result = [];
    let currentNumber = 1;

    for (let command of array) {
        switch (command) {
            case "add":
                result.push(currentNumber);
                break;
            case "remove":
                result.pop();
                break;
        }

        currentNumber++;
    }

    return result.length > 0 ? result.join('\n') : "Empty";
}

//console.log(solve(['add', 'add', 'add', 'add']));
console.log(solve(['add', 'add', 'remove', 'add', 'add']));