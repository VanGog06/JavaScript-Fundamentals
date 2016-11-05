function check([x1, y1, x2, y2]) {
    let result1 = calculateDistance(x1, y1, 0, 0);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${result1}`);

    let result2 = calculateDistance(x2, y2, 0, 0);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2}`);

    let result3 = calculateDistance(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3}`);

    function calculateDistance(a1, b1, a2, b2) {
        let distance = Math.sqrt((Math.pow(a2 - a1, 2)) + (Math.pow(b2 - b1, 2)));

        return distance % 1 === 0 ? 'valid' : 'invalid';
    }
}

check(['3', '0', '0', '4']);
check(['2', '1', '1', '1']);
