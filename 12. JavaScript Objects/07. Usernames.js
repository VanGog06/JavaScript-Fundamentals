function usernameCatalogue(usernameData) {
    let username = new Set();

    for (let user of usernameData) {
        username.add(user);
    }

    [...username].sort(sortingFunction).forEach(el => console.log(el));

    function sortingFunction(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }
}

/*usernameCatalogue(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);*/

usernameCatalogue(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);