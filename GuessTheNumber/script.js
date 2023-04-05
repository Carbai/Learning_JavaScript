let computerGuess;
let usrGuesses=[];
let numAttempts=0;
let maxGuesses;

let low = 1;
let high = 100;

function updateRange() {
    const rangeOutput = document.getElementById("rangeOutput");
    rangeOutput.innerHTML = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = 100 - high + '%';
    rangeOutput.classList.add('flash')

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + '%';
    lowValue.style.background = "#ef7b54";

    const space = document.getElementById("space")
    space.style.flex = high - low + '%';
    space.style.background = "#83e1d0";

    const highValue = document.getElementById("high")
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = "#ef7b54"
}

function gameEnding() {
    document.getElementById("newGameArea").style.display="inline";
    document.getElementById("inputBox").setAttribute('readonly',"readonly")
}

function newGame() {
    window.location.reload()
}

function init() {
    computerGuess = Math.floor(Math.random()*100 + 1);
    console.log(computerGuess);
    document.getElementById("newGameArea").style.display="none";
    document.getElementById("gameArea").style.display="none";
}

function startGameView() {
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}

function easyMode() {
    startGameView();
    maxGuesses = 10;
}

function hardMode() {
    startGameView();
    maxGuesses = 5;
}

function compareGuess(){
    const userGuess=Number(document.getElementById("inputBox").value);
    usrGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = usrGuesses;
    numAttempts ++;
    document.getElementById("attempts").innerHTML = numAttempts;

    if (numAttempts < maxGuesses) {
        if (userGuess > computerGuess) {
            if (userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = "Your guess is too high";
            document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
            if (userGuess > low) low = userGuess;
            document.getElementById('textOutput').innerHTML = "Your guess is too low";
            document.getElementById('inputBox').value = "";
    } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${numAttempts} attempts`;
            gameEnding()
    };
    } else {
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = "You lose!, <br> The number was: " + computerGuess;
            gameEnding()
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = "You lose!, <br> The number was: " + computerGuess;
            gameEnding()
        } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${numAttempts} attempts`;
            gameEnding()
        };
    }
    updateRange()
}

