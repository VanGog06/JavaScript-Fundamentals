function heroicInventory(data) {
    let result = [];

    for(let row of data) {
        let obj = {};

        let splittedData = row.split(' / ');
        let name = splittedData[0];
        let level = Number(splittedData[1]);

        let items = [];

        if (splittedData.length > 2) {
            items = splittedData[2].split(', ');
        }

        obj = {
            name: name,
            level: level,
            items: items
        }

        result.push(obj);
    }

    return JSON.stringify(result);
}