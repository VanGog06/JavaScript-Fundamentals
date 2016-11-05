function calculatePrice([movieTitle, dayOfWeek]) {
    movieTitle = movieTitle.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();
    let ticketPrice = 0;

    switch(movieTitle) {
        case "the godfather":
            switch (dayOfWeek) {
                case "monday":
                    ticketPrice = 12;
                    break;
                case "tuesday":
                    ticketPrice = 10;
                    break;
                case "wednesday":
                    ticketPrice = 15;
                    break;
                case "thursday":
                    ticketPrice = 12.50;
                    break;
                case "friday":
                    ticketPrice = 15;
                    break;
                case "saturday":
                    ticketPrice = 25;
                    break;
                case "sunday":
                    ticketPrice = 30;
                    break;
                default:
                    console.log("error")
            }
            break;
        case "schindler's list":
            switch (dayOfWeek) {
                case "monday":
                    ticketPrice = 8.50;
                    break;
                case "tuesday":
                    ticketPrice = 8.50;
                    break;
                case "wednesday":
                    ticketPrice = 8.50;
                    break;
                case "thursday":
                    ticketPrice = 8.50;
                    break;
                case "friday":
                    ticketPrice = 8.50;
                    break;
                case "saturday":
                    ticketPrice = 15;
                    break;
                case "sunday":
                    ticketPrice = 15;
                    break;
                default:
                    console.log("error")
            }
            break;
        case "casablanca":
            switch (dayOfWeek) {
                case "monday":
                    ticketPrice = 8;
                    break;
                case "tuesday":
                    ticketPrice = 8;
                    break;
                case "wednesday":
                    ticketPrice = 8;
                    break;
                case "thursday":
                    ticketPrice = 8;
                    break;
                case "friday":
                    ticketPrice = 8;
                    break;
                case "saturday":
                    ticketPrice = 10;
                    break;
                case "sunday":
                    ticketPrice = 10;
                    break;
                default:
                    console.log("error")
            }
            break;
        case "the wizard of oz":
            switch (dayOfWeek) {
                case "monday":
                    ticketPrice = 10;
                    break;
                case "tuesday":
                    ticketPrice = 10;
                    break;
                case "wednesday":
                    ticketPrice = 10;
                    break;
                case "thursday":
                    ticketPrice = 10;
                    break;
                case "friday":
                    ticketPrice = 10;
                    break;
                case "saturday":
                    ticketPrice = 15;
                    break;
                case "sunday":
                    ticketPrice = 15;
                    break;
                default:
                    console.log("error")
            }
            break;
        default:
            console.log("error");
    }

    if (ticketPrice !== 0) console.log(ticketPrice);
}

calculatePrice(['The Godfather', 'Friday']);
calculatePrice(['casablanca', 'sunday']);
calculatePrice(['Schindler\'s LIST', 'monday']);
calculatePrice(['SoftUni', 'Nineday']);
