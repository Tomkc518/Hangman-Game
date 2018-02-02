var image = document.getElementById("mainPicture");
var answerArray = [];
var letterEntered = [];

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

for (var i = 0; i < displayWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = displayWord.length;

document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
document.querySelector("#guesses").innerHTML = game.guessesRemaining;
document.querySelector("#wins").innerHTML = game.wins;

document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = userGuess.toLowerCase();
    
    if (answerArray.indexOf(userGuess) === -1) {
        for (var j = 0; j < displayWord.length; j++) {
                if (displayWord[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                }
        }
    }
    
    if (answerArray.indexOf(userGuess) === -1 && letterEntered.indexOf(userGuess) === -1) {
        letterEntered.push(userGuess);
        game.guessesRemaining--;
        document.querySelector("#lettersGuessed").innerHTML = letterEntered.join(" ");
    }

    if (remainingLetters === 0 && displayWord === "elephant") {
        game.wins++;
        image.src = "assets/images/elephant.jpg";
        resetGame();
    }

    document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
    document.querySelector("#guesses").innerHTML = game.guessesRemaining;
    document.querySelector("#wins").innerHTML = game.wins;
}



console.log(displayWord);
