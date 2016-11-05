function solve(array) {
    array = array.map(Number);

    function sum(array) {
        let sum = 0;
        array.forEach(el => sum += el);

        return sum;
    }

    function inverseSum(array) {
        let sum = 0;
        array.forEach(el => sum += 1 / el);

        return sum;
    }

    function concat(array) {
        return array.join('');
    }

    console.log(sum(array));
    console.log(inverseSum(array));
    console.log(concat(array));
}

solve(['1', '2', '3']);