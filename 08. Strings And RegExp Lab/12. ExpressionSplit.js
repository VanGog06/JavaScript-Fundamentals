function split([input]) {
    return input.split(/[\s(),;.]+/).join('\n');
}

console.log(split(['let sum = 1 + 2;if(sum > 2){    console.log(sum);}']));