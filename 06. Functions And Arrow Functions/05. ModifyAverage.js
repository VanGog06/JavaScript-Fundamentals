function solve([input]) {
    while (true) {
        let average = 0;
        let sum = 0;

        for(let i = 0; i < input.length; i++) {
            sum += Number(input[i]);
        }

        average = sum / input.length;

        if (average > 5) break;

        input = addNine(input);
    }

    console.log(input);

    function addNine(input) {
        return input + "9";
    }
}

solve(['323']);
