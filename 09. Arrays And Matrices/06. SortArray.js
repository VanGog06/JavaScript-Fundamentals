function sort(array) {
    return array.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a.length == b.length) {
            if ((a > b)) return 1;
            else return -1;
        }
    }).join('\n');
}

console.log(sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sort(['test', 'Deny', 'omen', 'Default']));