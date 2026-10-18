let evilCount = 0;
$("#evil-button").click( function() {
   evilCount += 1;
   $("#evil-button").html("you killed " + evilCount + " million hamsters");
});

let niceCount = 1;
$("#nice-button").click( function() {
    niceCount = niceCount * 10.1;
    $("#nice-button").html("you saved " + niceCount + " billion bunnies")
});


