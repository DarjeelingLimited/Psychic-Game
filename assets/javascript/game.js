// STarting variable state

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = [];
// var computerGuess = 0;


// Create variables that hold references to the places in the HTML where we want to display things
// var winsText = document.getElementById("wins");

//Array of possible letter choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var randomizer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomizer);

document.onkeyup = function (event) {
    var userGuess = event.key;

    //In play, if you guess right, so the user wins

    if ((userGuess === randomizer) && (guessesLeft > 1)) {
        guessesLeft = 9;
        guessSoFar = []; // set an empty array
        wins++;
        randomizer = alphabet[Math.floor(Math.random() * alphabet.length)]; // win, give me a  new letter
        console.log(randomizer);//test to make sure the number changes
        alert("Yay! You win.")
    } else if ((userGuess !== randomizer) && (guessesLeft > 1)) { // if you lose the play
        guessesLeft--;
        guessSoFar.push(userGuess);
    } else if ((userGuess !== randomizer) && (guessesLeft === 1)) {  // if you totally lost
        losses++;
        guessSoFar = [];
        guessesLeft = 9;
        randomizer = alphabet[Math.floor(Math.random() * alphabet.length)]; // lose, give me a new letter
        console.log(randomizer); // test to make sure the number changes
        alert("Sorry, you lost.");
    };


    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesssofar").innerHTML = "Your Guesses so far: " + guessSoFar;
    document.getElementById("guessleft").innerHTML = "Guesses Left: " + guessesLeft;
};

