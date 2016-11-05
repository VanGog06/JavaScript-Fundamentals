function capitalizeTheWords([str]) {
    let splittedStr = str.split(' ');
    let result = '';

    for (let word of splittedStr) {
        for (let index in word) {
            if ((word.charCodeAt(index) >= 65 && word.charCodeAt(index) <= 90) ||
                (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122)) {
                if (index == 0) result += word[index].toUpperCase();
                else result += word[index].toLowerCase();
            }
            else result += word[index];
        }
        result += ' ';
    }

    return result;
}