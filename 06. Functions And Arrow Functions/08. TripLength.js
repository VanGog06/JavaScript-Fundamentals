function solve([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let distance12 = calculateDistance(x1, y1, x2, y2);
    let distance13 = calculateDistance(x1, y1, x3, y3);
    let distance23 = calculateDistance(x2, y2, x3, y3);

    if (Math.max(distance12, distance13, distance23) == distance13) console.log('1->2->3: ' + (distance12 + distance23));
    else if (Math.max(distance12, distance13, distance23) == distance12) console.log('1->3->2: ' + (distance13 + distance23));
    else if (Math.max(distance12, distance13, distance23) == distance23) console.log('2->1->3: ' + (distance13 + distance12));

    function calculateDistance(a1, b1, a2, b2) {
        return Math.sqrt((Math.pow(a2 - a1, 2)) + (Math.pow(b2 - b1, 2)));
    }
}

//solve(['5', '1', '1', '1', '5', '4']);
//solve(['-1', '-2', '3.5', '0', '0', '2']);
solve(['0', '0', '2', '0', '4', '0']);