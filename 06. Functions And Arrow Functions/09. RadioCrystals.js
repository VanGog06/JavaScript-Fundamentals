function solve(array) {
    let desiredMicrons = array.splice(0, 1).join();

    for(let i = 0; i < array.length; i++) {
        let currentMicrons = array[i];
        console.log(`Processing chunk ${currentMicrons} microns`);
        let cutNumber = 0;
        let lapNumber = 0;
        let grindNumber = 0;
        let etchNumber = 0;
        let xrayNumber = 0;
        let currentOperation = '';
        let lastOperation = '';

        while (currentMicrons != desiredMicrons) {
            if (cut(currentMicrons) >= desiredMicrons - 1) {
                currentOperation = 'cut';
                lastOperation = 'cut';
                cutNumber++;
                currentMicrons = cut(currentMicrons);
            } else if (lap(currentMicrons) >= desiredMicrons - 1) {
                currentOperation = 'lap';
                if (currentOperation != lastOperation) {
                    currentMicrons = wash(currentMicrons);
                    lastOperation = 'lap';
                }

                lapNumber++;
                currentMicrons = lap(currentMicrons);
            } else if (grind(currentMicrons) >= desiredMicrons - 1) {
                currentOperation = 'grind';
                if (currentOperation != lastOperation) {
                    currentMicrons = wash(currentMicrons);
                    lastOperation = 'grind';
                }

                grindNumber++;
                currentMicrons = grind(currentMicrons);
            } else if (etch(currentMicrons) >= desiredMicrons - 1) {
                currentOperation = 'etch';
                if (currentOperation != lastOperation) {
                    currentMicrons = wash(currentMicrons);
                    lastOperation = 'etch';
                }

                etchNumber++;
                currentMicrons = etch(currentMicrons);
            } else if (xray(currentMicrons) == desiredMicrons) {
                xrayNumber++;
                currentMicrons = xray(currentMicrons);
            }

            currentMicrons = wash(currentMicrons);
        }

        if (cutNumber > 0) {
            console.log(`Cut x${cutNumber}`);
            console.log('Transporting and washing');
        }

        if (lapNumber > 0) {
            console.log(`Lap x${lapNumber}`);
            console.log('Transporting and washing');
        }

        if (grindNumber > 0) {
            console.log(`Grind x${grindNumber}`);
            console.log('Transporting and washing');
        }

        if (etchNumber > 0) {
            console.log(`Etch x${etchNumber}`);
            console.log('Transporting and washing');
        }

        if (xrayNumber > 0) {
            console.log(`X-ray x${xrayNumber}`);
        }

        console.log(`Finished crystal ${currentMicrons} microns`);

        /*console.log(cutNumber);
        console.log(lapNumber);
        console.log(grindNumber);
        console.log(etchNumber);
        console.log(xrayNumber);
        console.log(currentMicrons);*/
    }

    function cut(number) {
        return number / 4;
    }

    function lap(number) {
        return number - number / 5;
    }

    function grind(number) {
        return number - 20;
    }

    function etch(number) {
        return number - 2;
    }

    function xray(number) {
        return number + 1;
    }

    function wash(number) {
        return Math.floor(number);
    }
}

solve(['1000', '4000', '8100']);