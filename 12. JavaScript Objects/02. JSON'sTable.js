function jsonTable(data) {
    let html = '<table>\n';

    for(let obj of data) {
        let parsedObj = JSON.parse(obj);
        html += '    <tr>\n';

        html += `        <td>${escape(parsedObj.name)}</td>\n`;
        html += `        <td>${escape(parsedObj.position)}</td>\n`;
        html += `        <td>${escape(parsedObj.salary)}</td>\n`;

        html += '    <tr>\n';
    }

    html += '</table>';

    return html;

    function escape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.toString().replace(/[\"&'<>]/g, ch => map[ch]);

    }
}

console.log(jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"<div>Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));