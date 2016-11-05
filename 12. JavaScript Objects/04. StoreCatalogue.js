function storeCatalogue(storeData) {
    let catalogue = new Map();

    for (let row of storeData) {
        let [name, price] = row.split(' : ');
        price = Number(price);
        let initial = name[0];

        if (!catalogue.has(initial)) {
            catalogue.set(initial, new Map());
        }

        catalogue.get(initial).set(name, price);
    }

    function sortFunction(a, b) {
        return a[0].localeCompare(b[0]);
    }

    let alphabeticalCatalogue = [...catalogue].sort(sortFunction);

    for (let [key, value] of alphabeticalCatalogue) {
        console.log(key);
        let sortedValue = [...value].sort(sortFunction);
        for(let [k, v] of sortedValue) {
            console.log(`  ${k}: ${v}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);