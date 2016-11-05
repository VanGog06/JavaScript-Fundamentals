function printMultiplicationTable([n]) {
    [n] = [n].map(Number);

    console.log('<table border="1">');

    for(let i = 0; i <= n; i++) {
        console.log('<tr>');
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) console.log('<th>x</th>');

            else if (i === 0 && j > 0) console.log('<th>' + j + '</th>');

            else if (i > 0 && j === 0) console.log('<th>' + i + '</th>');

            else console.log('<td>' + i * j + "</td>");
        }
        console.log('</tr>');
    }

    console.log('</table>')
}

printMultiplicationTable([5]);