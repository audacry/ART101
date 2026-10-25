let count = 0;

let buttonCreature = {
    name: "Tarot Deck",
    species: "guidance to wisdom",
    favoriteFood: "emotions",
    moods: ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant"]
};

$("#needy-button").click(function () {
    count += 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My current card is " + currentMood + ".</p>";

    message = message + "<p>I am a " + buttonCreature.name + "</p>";

    message = message + "<p>I am the " + buttonCreature.species + ".</p>";

    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});

