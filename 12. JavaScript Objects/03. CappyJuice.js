function cappyJuice(juiceData) {
    let bottles = new Map();
    let juices = new Map();

    for(let row of juiceData) {
        let [name, quantity] = row.split(/\s*=>\s*/);
        quantity = Number(quantity);

        if (!juices.has(name)) {
            juices.set(name, 0);
        }

        juices.set(name, juices.get(name) + quantity);

        if (juices.get(name) >= 1000) {
            if (!bottles.has(name)) {
                bottles.set(name, 0);
            }

            bottles.set(name, Math.floor(juices.get(name) / 1000));
        }
    }

    for (let [key, value] of bottles) console.log(key + " => " + value);
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);