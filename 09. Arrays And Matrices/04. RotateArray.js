function rotateArray(array) {
    let times = Number(array.pop());

    for (let i = 0; i < times % 5; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotateArray(['Banana', '15']);