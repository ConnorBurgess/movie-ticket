function Movie(title, time, rate, price) {
    this.title = title;
    this.time = time;
    this.rate = rate,
    this.price = price;
}

let spiritedAway = new Movie("Spirited Away", "08:00", "PG", 7.50);
let titanic = new Movie("Titanic", "16:00", "R", 14); 
let ff = new Movie("2 Fast 2 Furious", "13:00", "PG-13", 10); 

let moviesList = {
    spiritedAway,
    titanic,
    ff
}

function Ticket(title, age, time) {
    this.title = title;
    this.age = age,
    this.time = time;
}

Ticket.prototype.seniorDiscount = function(movie) {
    if(this.age >= 55) {
        return movie.price - 2;
    } else {
        return movie.price++;
    }
}

function getHour(time) {
    let hour = parseInt(time.slice(0, 2)); //08:00
    return hour;
}

Ticket.prototype.underEightTeen = function() {
    return this.age >= 18;
}

Movie.prototype.updatedPrice = function(time) {
    let ticketTime = getHour(time);
    let movieReleaseTime = getHour(this.time);

    if(ticketTime - movieReleaseTime < 0) {
        this.price += 2;
    }
    // Spirited Away is released at 8AM
    // I bought my ticket for 8:45AM
    // Price would go up $1
    else if(ticketTime - movieReleaseTime <= 1) {
        this.price++;
    } else {
        this.price--;
    }
}

function ageRestriction(acceptance) {
    if(acceptance) {
        $("#under-age").show();
    }
}

$(document).ready(function() {

    let currentMovie = "";

    $("#form").submit(function(event) {
        event.preventDefault();
        let title = $("#title option:selected").text();
        let time = $("#time").val(); // 08:00
        let age = $("#age").val();
      
        let ticket = new Ticket(title, age, time);
        ticket.seniorDiscount(title);
        ticket.legal = ticket.underEightTeen();

        Object.entries(moviesList).forEach(function(movie) {
            if(movie[1].title === title) {
                currentMovie = movie[1]
            }
        })

        console.log(currentMovie)


        $("#info").append(`
            <p>${ticket.title}</p>
            <p>${ticket.age}</p>
            <p>${ticket.time}</p>

            <h1>${currentMovie.title}</h1>
            <h1>${currentMovie.time}</h1>
            <h1>${currentMovie.rate}</h1>
            <h1>${currentMovie.price}</h1>
        `);
    });
});