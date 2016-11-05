function extractLink(array) {
    let regex = /w{3}\.[a-zA-Z\d-]+(\.[a-z]+){1,}/g;

    for (let row of array) {
        while (match = regex.exec(row)) {
            console.log(match[0]);
        }
    }
}

extractLink(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'
]);