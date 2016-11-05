function roadRadar([speed, area]){
    function determineLimit(area) {
        switch (area) {
            case "city": return 50;
            case "residential": return 20;
            case "interstate": return 90;
            case "motorway": return 130;
        }
    }

    let limit = determineLimit(area);
    if (speed > limit) {
        let difference = speed - limit;

        if (difference <= 20) {
            console.log('speeding');
        } else if (difference > 20 && difference <= 40) {
            console.log('excessive speeding');
        } else if (difference > 40) {
            console.log('reckless driving');
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);