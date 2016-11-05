function findEvenPositionElements(array) {
    let str = '';

    for(let i = 0; i < array.length; i+= 2) {
       str += array[i] + " ";
    }

    console.log(str);
}

findEvenPositionElements(['20', '30', '40']);