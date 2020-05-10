//VARIABLES
var words = ['Maple','Ash','Willow','Cherry','Elm','Pine', 'Oak', 'Walnut']
var randomWord = "";
var HangManWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = -1;
var losses = 0;
var guessesRemaining = 9;

function HangMan() {
    //pick random word and store in dashes
    randomWord = words[Math.floor(Math.random() * words.length)];
    HangManWord = randomWord.split("");
    blanks = HangManWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //testing
    console.log(randomWord);
    console.log(HangManWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}
//RESET FUNCTION

function reset() {
    guessesRemaining = 6;
    wrongGuess = [];
    blanksAndCorrect = [];
    HangMan()
}

//See if letters typed match hangman word
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
   
}

//check to see if player won
function complete() {
    console.log("wins" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //WON
    if (HangManWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

        //LOST
    } else if (guessesRemaining === 0) { 
        reset()
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

 // types letters out
 document.onkeypress = function(event) {}
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses)
    complete();
    console.log(guesses);

    //display/store incorrect letters on screen
    
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");

}