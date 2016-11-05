function calculate([x1, y1, z1, x2, y2, z2]) {
    let distanceX = Math.pow(x1 - x2, 2);
    let distanceY = Math.pow(y1 - y2, 2);
    let distanceZ = Math.pow(z1 - z2, 2);

    console.log(Math.sqrt(distanceY + distanceX + distanceZ));
}

calculate(['1', '1', '0', '5', '4', '0']);