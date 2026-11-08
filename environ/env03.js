let environmentTitle = "Characters Who May Never Be The Sun";

function askTime([whatTime]) {
    let userTime = prompt("morning, noon, or night?");

    if (userTime == "morning") {
        $("#top-output").html("Good morning.");
    }

    else if (userTime == "noon") {
        $("#top-output").html("Good afternoon.");
    }
    else if (userTime == "night") {
        $("#top-output").html("Good night.");
    }
    else {
        $("#top-output").html("");
    }
}

$("#top-button").click(function () {
    askTime("morning", "noon", "night");

})




let girl1 = {
    name: "Titania",
    type: "combat portrait",
    color: "pink",
    status: "finished"
};

let girl2 = {
    name: "Titania",
    type: "concept art",
    color: "blue",
    status: "in development"
};


let girl1Count = 1

$("#girl1-button").click(function () { 
    girl1Count +=1;

    let girl1Message = "<p>thanks, i'll repay you " + girl1Count + " times over.</p>";

    girl1Message = girl1Message + "<p>my name is " + girl1.name + ".</p>";

    girl1Message = girl1Message + "<p>i was designed to be a " + girl1.type + ".</p>";

    girl1Message = girl1Message + "<p>my design is " + girl1.status + ".</p>";
    
    $("#girl1-output").html(girl1Message);

    console.log(girl1Count);
    console.log(girl1Message);

});

let girl2Count = 0;

$("#girl2-button").click(function () { 
    girl2Count +=1;

    let girl2Message = "<p>i've been reworked " + girl2Count + " times.</p>";

    girl2Message = girl2Message + "<p>my name is also " + girl2.name + ".</p>";

    girl2Message = girl2Message + "<p>i was designed for " + girl2.type + ".</p>";

    girl2Message = girl2Message + "<p>my design is still " + girl2.status + ".</p>";
    
    $("#girl2-output").html(girl2Message);

    console.log(girl2Count);
    console.log(girl2Message);

});