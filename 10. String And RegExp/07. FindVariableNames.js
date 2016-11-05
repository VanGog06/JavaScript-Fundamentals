function findVariableNames([str]) {
    let regex = /\b_([A-Za-z\d]+)\b/g;
    let result = [];

    while(match = regex.exec(str)) {
        result.push(match[1]);
    }

    return result.join(',');
}