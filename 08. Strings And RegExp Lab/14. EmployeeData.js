function parseData(array) {
    let pattern = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/;

    for (let line of array) {
        let match = pattern.exec(line);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

parseData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);