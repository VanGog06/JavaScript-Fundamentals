function sum([n, k]) {
    let array = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        let currentArray = array;
        let length = currentArray.length - k > 0 ? currentArray.length - k : 0;
        //array.slice(array.length, k).forEach(el => sum += el);
        let newArray = currentArray.slice(length, currentArray.length);
        newArray.forEach(el => sum += el);
        array.push(sum);
    }

    console.log(array.slice(0, array.length).join(' '));
}

sum(['8', '2']);