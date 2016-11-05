function round([number, rate]) {
    [number, rate] = [number, rate].map(Number);

    if (rate > 15) rate = 15;

    console.log(Number(number.toFixed(rate)));
}

round(['10.5', '3']);