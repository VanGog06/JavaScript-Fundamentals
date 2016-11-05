function lastMonth([day, month, year]) {
    let date = new Date(year, month, day);
    let printDate = new Date(year, month - 1, day - day);

    console.log(printDate.getDate());
}

lastMonth(['17', '3', '2002']);
lastMonth(['13', '12', '2004']);