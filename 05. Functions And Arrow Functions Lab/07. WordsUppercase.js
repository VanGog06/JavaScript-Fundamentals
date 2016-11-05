function uppercaseWords([array]) {
    console.log(array
                    .split(/[\W]+/)
                    .filter(el => el != '')
                    .join(', ')
                    .toUpperCase());
}

uppercaseWords(['Hi, how are you?']);