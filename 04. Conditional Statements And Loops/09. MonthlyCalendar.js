function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let date = new Date(Date.UTC(year, month - 1, day));

    let lastMonthDay = new Date(Date.UTC(year, month, 0));
    let numberOfDays = lastMonthDay.getDate();

    let firstMonthDay = new Date(Date.UTC(year, month - 1, 1));
    let lastDay = new Date(Date.UTC(year, month - 1, 0)).getDate();

    let daysFromLastMonth = 0;
    let daysFromNewMonth = 0;
    let days = [];


    switch (firstMonthDay.getDay()) {
        case 0:
            daysFromLastMonth = 0;
            break;
        case 1:
            daysFromLastMonth = 1;
            break;
        case 2:
            daysFromLastMonth = 2;
            break;
        case 3:
            daysFromLastMonth = 3;
            break;
        case 4:
            daysFromLastMonth = 4;
            break;
        case 5:
            daysFromLastMonth = 5;
            break;
        case 6:
            daysFromLastMonth = 6;
            break;
    }

    switch (lastMonthDay.getDay()) {
        case 0:
            daysFromNewMonth = 6;
            break;
        case 1:
            daysFromNewMonth = 5;
            break;
        case 2:
            daysFromNewMonth = 4;
            break;
        case 3:
            daysFromNewMonth = 3;
            break;
        case 4:
            daysFromNewMonth = 2;
            break;
        case 5:
            daysFromNewMonth = 1;
            break;
        case 6:
            daysFromNewMonth = 0;
            break;
    }

    /*console.log("Created date: " + date);
    console.log("Last day of month: " + lastMonthDay);
    console.log("Number of days: " + numberOfDays);
    console.log("First day of month: " + firstMonthDay);
    console.log("Last day of previous month: " + lastDay);
    console.log("Days from last month: " + daysFromLastMonth);
    console.log("Days from next month: " + daysFromNewMonth);*/

    for (let i = lastDay; i > lastDay - daysFromLastMonth; i--) {
        days.unshift(`<td class="prev-month">${i}</td>`);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        if (date.getDate() == i) {
            days.push(`<td class="today">${i}</td>`);
        } else {
            days.push(`<td>${i}</td>`);
        }

    }

    for (let i = 1; i <= daysFromNewMonth; i++) {
        days.push(`<td class="next-month">${i}</td>`)
    }

    console.log("<table>");

    console.log(" <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>");

    for (let i = 0; i < days.length; i += 7) {
        console.log(`  <tr>${days[i]}${days[i + 1]}${days[i + 2]}${days[i + 3]}${days[i + 4]}${days[i + 5]}${days[i + 6]}</tr>`);
    }

    console.log("</table>");
}

calendar(['24', '12', '2012']);