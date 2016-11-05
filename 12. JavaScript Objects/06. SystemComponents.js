function systemComponents(systemData) {
    let system = new Map();

    for (let row of systemData) {
        let splittedData = row.split(' | ');
        let systemName = splittedData[0];
        let productName = splittedData[1];
        let subComponentName = splittedData[2];

        if (!system.has(systemName)) {
            system.set(systemName, new Map());
        }

        if (!system.get(systemName).has(productName)) {
            system.get(systemName).set(productName, []);
        }

        system.get(systemName).get(productName).push(subComponentName);
    }

    let sortedSystem = [...system.keys()].sort(sortingFunction);

    function sortingFunction(a, b) {
        return b[1].size - a[1].size || a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    }

    for (let [key, value] of sortedSystem) {
        console.log(key);

        for (let [k, v] of value) {
            //let sortedValues = [...v].sort();
            console.log(`|||${k}`);
            console.log(v);
            /*for (let item of sortedValues) {
                console.log(`||||||${item}`);
            }*/
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);