function engineeringCompany(carData) {
    let cars = new Map();

    for (let row of carData) {
        let carInformation = row.split(' | ');
        let brand = carInformation[0];
        let model = carInformation[1];
        let quantity = Number(carInformation[2]);

        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        }

        if (!cars.get(brand).has(model)) {
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + quantity);
    }

    for (let [key, value] of cars) {
        console.log(key);
        for (let [k, v] of value) {
            console.log(`###${k} -> ${v}`);
        }
    }
}

engineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);