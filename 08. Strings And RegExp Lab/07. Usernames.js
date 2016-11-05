function usernames(array) {
    let result = [];

    for(let line of array) {
        let username = '';
        let splitted = line.split('@');
        username += splitted.shift() + '.';

        splitted.forEach(x => x.split('.').forEach(y => username += y[0]));
        result.push(username);
    }

    return result.join(', ');
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);