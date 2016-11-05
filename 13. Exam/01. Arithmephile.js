function arithmephile(input) {
    input = input.map(Number);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0 && input[i] < 10) {
            if (i + input[i] < input.length) {
                let currentSum = 1;

                for (let j = i + 1; j <= i + input[i]; j++) {
                    currentSum *= input[j];
                }

                result.push(currentSum);
            }
        }
    }

    result = result.sort((a, b) => b - a);
    console.log(result[0]);
}

arithmephile(['10',
    '20',
    '2',
    '30',
    '44',
    '123',
    '3',
    '56',
    '20',
    '24']);

arithmephile(['100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1']);