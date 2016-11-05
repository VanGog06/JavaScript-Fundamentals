function printBill(array) {
    let result = [];
    let price = 0;

    for (let i = 0; i < array.length; i += 2) {
        result.push(array[i]);
        price += Number(array[i + 1]);
    }

    console.log('You purchased ' + result.join(', ') + ' for a total sum of ' + price);
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);