function determineColor([n]) {
    let html = "<ul>\n";

    for (let i = 1; i <= n; i++) {
        let color = 'green';
        if (i % 2 == 0) color = 'blue';

        html += `<li><span style='color:${color}'>${i}</span></li>`;
    }

    html += "</ul>";
    return html;
}