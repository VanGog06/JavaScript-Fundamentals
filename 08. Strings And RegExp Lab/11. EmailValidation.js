function validateEmail([email]) {
    let pattern = /\b[a-zA-Z0-9]+@[a-z]+\.[a-z]+\b/;

    return pattern.test(email) ? console.log('Valid') : console.log('Invalid');
}

validateEmail(['valid@email.bg']);
validateEmail(['valid@emai1.bg']);