function calculate([v1, v2, t]) {
    let distance1 = v1 * (t / (60 * 60));
    let distance2 = v2 * (t / (60 * 60));

    console.log(Math.abs(distance1 - distance2) * 1000);
}

calculate(['0', '60', '3600']);
calculate(['11', '10', '120']);