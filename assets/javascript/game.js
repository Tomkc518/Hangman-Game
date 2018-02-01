var game = {
    wins: 0,
    guessesRemaining: 13,
    lettersGuessed: [],
    currentWord: [
        "elephant",
        "giraffe",
        "wildebeest",
        "cheetah",
        "giantfox"
    ]
};

var displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];

var answerArray = [];

for (var i = 0; i < displayWord.length; i++) {
    answerArray[i] = "_";
}

//var remainingLetters = displayWord.length;

document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
document.querySelector("#guesses").innerHTML = game.guessesRemaining;



document.onkeyup = function(event) {

    var userGuess = event.key;
    var userGuess = userGuess.toLowerCase();

        for (var j = 0; j < displayWord.length; j++) {
            if (displayWord[j] === userGuess) {
                answerArray[j] = userGuess;
            }
        }

        document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
        document.querySelector("#guesses").innerHTML = game.guessesRemaining;
}



//while (remainingLetters > 0) {
    // Game code goes here

    // Show the player their progress
   
    //document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
    
    // Take input from the player

    // Update answerArray and remainingLetters for every correct guess
//}



console.log(displayWord);
//console.log(answerArray);
//console.log(remainingLetters);