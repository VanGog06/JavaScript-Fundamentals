function calculateInches([inches]) {
    inches = Number(inches);

    console.log(Math.floor(inches / 12) + "'-" + inches % 12 + "\"");
}

calculateInches(['11']);