function cooking(input) {
    let operations = input.slice(1, input.length);
    console.log(operations.join(" "));

    let number = input[0];

    for (let i = 0; i < 5; i++) {
        number = operation(number, operations[i]);
        console.log(number);
    }

    function operation(number, name) {
        switch (name) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number++;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number / 5;
                break;
        }

        return number;
    }
}

cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);