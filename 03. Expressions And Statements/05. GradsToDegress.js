function calculate([n]) {
    n = Number(n);
    n = n % 400;
    n += 400;
    n = n % 400;

    console.log(n * 0.9);
}

calculate(['400']);
calculate(['850']);