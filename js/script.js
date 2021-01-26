function Movie(title, time, rate, price) {
    this.title = title;
    this.time = time;
    this.rate = rate,
    this.price = price;
}

let spiritedAway = ("Spirited Away", "08:30", "PG", 7.50);
let titanic = ("Titanic", "16:00", "R", 14); 
let ff = ("2 Fast 2 Furious", "13:00", "PG-13", 10); 

function Ticket(title, age, time) {
    this.title = title;
    this.age = age,
    this.time = time;
}

Ticket.prototype.seniorDiscount = function(age, movie) {
    if(age >= 55) {
        return movie.price - 2;
    } else {
        return movie.price++;
    }
}

$(document).ready(function() {


    $("#form").submit(function(event) {
        event.preventDefault();
        let title = $("#title option:selected").text();
        let time = $("#time").val(); // 08:00
        let age = $("#age").val();

        alert(age);
        alert(time);
        alert(title);
    
    });
});