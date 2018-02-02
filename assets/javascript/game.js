var image = document.getElementById("mainPicture");
var audioElephant = new Audio("assets/audio/elephant.mp3");
var audioCheetah = new Audio("assets/audio/Cheetah.mp3");
var audioWildebeest = new Audio("assets/audio/EarthQuake.mp3");
var audioGiraffe = new Audio("assets/audio/jungle.mp3");
var audioFox = new Audio("assets/audio/what-does-the-fox-say.mp3");
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
//Assign a random word from the wordbank -currentWord- and set remainingLetters to the length of the word
var displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
var remainingLetters = displayWord.length;
//for each letter in displayWord this adds a _ to the answerArray
for (var i = 0; i < displayWord.length; i++) {
    answerArray[i] = "_";
};
//reset the game so the next word is randomly choosen again and the guesses are reset.
function resetGame() {
    displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
    remainingLetters = displayWord.length;
    game.guessesRemaining = 13;
    letterEntered = [];
    answerArray = [];
    for (var i = 0; i < displayWord.length; i++) {
        answerArray[i] = "_";
    };
    console.log(displayWord);
};
//dispays the information on the screen as soon as the page is loaded
document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
document.querySelector("#guesses").innerHTML = game.guessesRemaining;
document.querySelector("#wins").innerHTML = game.wins;
//Once any key is pressed, the game starts
document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = userGuess.toLowerCase();
    //if the letter hasn't been guessed already, check the guess against each letter in the array
    if (answerArray.indexOf(userGuess) === -1) {
        for (var j = 0; j < displayWord.length; j++) {
                if (displayWord[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                }
        }
    };
    //if the letter is not in the word then lower the guesses and track the letter guessed
    if (answerArray.indexOf(userGuess) === -1 && letterEntered.indexOf(userGuess) === -1) {
        letterEntered.push(userGuess);
        game.guessesRemaining--;
        document.querySelector("#lettersGuessed").innerHTML = letterEntered.join(" ");
    };
    //once all the letters have been filled in, based on the word, puts a picture of the animal up and plays its sound and resets to the next word.
    if (remainingLetters === 0 && displayWord === "elephant") {
        game.wins++;
        image.src = "assets/images/elephant.jpg";
        audioElephant.play();
        resetGame();
    } else if (remainingLetters === 0 && displayWord === "giraffe") {
        game.wins++;
        image.src = "assets/images/giraffe.jpg";
        audioGiraffe.play();
        resetGame();
    } else if (remainingLetters === 0 && displayWord === "wildebeest") {
        game.wins++;
        image.src = "assets/images/wildebeest.jpg";
        audioWildebeest.play();
        resetGame();
    } else if (remainingLetters === 0 && displayWord === "cheetah") {
        game.wins++;
        image.src = "assets/images/cheetah.jpg";
        audioCheetah.play();
        resetGame();
    } else if (remainingLetters === 0 && displayWord === "giantfox") {
        game.wins++;
        image.src = "assets/images/giantfox.jpg";
        audioFox.play();
        resetGame();
    } else if (game.guessesRemaining === 0) {
        resetGame();
    }
    //constantly refreshes the screen to the current changes
    document.querySelector("#guessWord").innerHTML = answerArray.join(" ");
    document.querySelector("#lettersGuessed").innerHTML = letterEntered.join(" ");
    document.querySelector("#guesses").innerHTML = game.guessesRemaining;
    document.querySelector("#wins").innerHTML = game.wins;
}

console.log(displayWord);
