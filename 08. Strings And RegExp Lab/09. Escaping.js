function printEscaped(input) {
    console.log('<ul>');

    console.log(input.map(escape).map(item => `  <li>${item}</li>`).join('\n'));

    console.log('</ul>');

    function escape(html) {
        let map = {'"': '&quot;', '<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;'};

        return html.replace(/[<>"'&]/g, ch => map[ch]);
    }
}

printEscaped(['<b>unescaped text</b>', 'normal text']);