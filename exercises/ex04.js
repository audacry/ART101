let colors= ["pink", "green", "gold", "purple", "orange", "aliceblue", "babypink", "violet"];
let evilButtonText = "";

let evilCount = 0;
$("#evil-button").click( function() {
    evilCount += 1;

    console.log(evilCount);
    console.log(colors[evilCount-1]);

    evilButtonText ="you killed " + evilCount + " hamsters and color is " + colors[evilCount];
    $("#evil-button").html(evilButtonText);
    $("body").css("background-color", colors[evilCount-1]);
    $("body").css(" <img src=" +colors[count-1] + ".jpg")
});

let niceCount = 1;
$("#nice-button").click( function() {
    niceCount *= 10.1;
    $("#nice-button").html("you saved " + niceCount + " billion bunnies");

});


let otherCount = 1;
$("#other-button").click( function() {
    otherCount *= 2;
    $("#other-button").html("i am now " + otherCount + " times stronger");
});

