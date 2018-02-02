var image = document.getElementById("mainPicture");
var answerArray = [];
var letterEntered = [];

var game = {
    wins: 0,
    guessesRemaining: 13,
    currentWord: [
        "elephant",
        "giraffe",
        "wildebeest",
        "cheetah",
        "giantfox"
    ]
};

var displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
var remainingLetters = displayWord.length;

for (var i = 0; i < displayWord.length; i++) {
    answerArray[i] = "_";
}

function resetGame() {
    displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
    remainingLetters = displayWord.length;
    game.guessesRemaining = 13;
    letterEntered = [];
    answerArray = [];
    
    for (var i = 0; i < displayWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(displayWord);
};

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
    if (remainingLetters === 0 && displayWord === "giraffe") {
        game.wins++;
        image.src = "assets/images/giraffe.jpg";
        resetGame();
    }
    if (remainingLetters === 0 && displayWord === "wildebeest") {
        game.wins++;
        image.src = "assets/images/wildebeest.jpg";
        resetGame();
    }
    if (remainingLetters === 0 && displayWord === "cheetah") {
        game.wins++;
        image.src = "assets/images/cheetah.jpg";
        resetGame();
    }
    if (remainingLetters === 0 && displayWord === "giantfox") {
        game.wins++;
        image.src = "assets/images/giantfox.jpg";
        resetGame();
    }
    
    document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
    document.querySelector("#lettersGuessed").innerHTML = letterEntered.join(" ");
    document.querySelector("#guesses").innerHTML = game.guessesRemaining;
    document.querySelector("#wins").innerHTML = game.wins;
}

console.log(displayWord);
