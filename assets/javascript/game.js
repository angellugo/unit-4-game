var debug = false;

var wins = 0;
var losses = 0;
var randomNumber;
var totalScore;
var rubyPoints;
var diamondPoints;
var yellowDiamondPoints;
var emeraldPoints;

function resetGame() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    totalScore = 0;
    rubyPoints = Math.floor(Math.random() * 12) + 1;
    diamondPoints = Math.floor(Math.random() * 12) + 1;
    yellowDiamondPoints = Math.floor(Math.random() * 12) + 1;
    emeraldPoints = Math.floor(Math.random() * 12) + 1;

    debug && console.log("__________________________Game Reset_________________________");
    debug && console.log("randomNumber", randomNumber);
    debug && console.log("rubyPoints", rubyPoints);
    debug && console.log("diamondPoints", diamondPoints);
    debug && console.log("yellowDiamondPoints", yellowDiamondPoints);
    debug && console.log("emeraldPoints", emeraldPoints);

    document.querySelector("#randomNumber").innerHTML = "Random number: " + randomNumber;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    renderTotalScore();

};

function renderTotalScore() {
    document.querySelector("#totalScore").innerHTML = "Total Score: " + totalScore;
}

function playerWins() {
    wins++;
    resetGame();
    debug && alert("Winner winner chicken dinner!")
}

function playerLoses() {
    losses++;
    resetGame();
    debug && alert("You lost!")
}

function checkStatusofGame() {
    if (totalScore > randomNumber){
        playerLoses();
    }else if ( totalScore === randomNumber){
        playerWins();
    }
    //else continue playing
}

resetGame();
$('.rubiesButton').on("click", function(event){
    totalScore += rubyPoints;
    renderTotalScore();
    checkStatusofGame();
});

$('.diamondButton').on("click", function(event){
    totalScore += diamondPoints;
    renderTotalScore();
    checkStatusofGame();
});

$('.yellowDiamondButton').on("click", function(event){
    totalScore += yellowDiamondPoints;
    renderTotalScore();
    checkStatusofGame();
});

$('.emeraldButton').on("click", function(event){
    totalScore += emeraldPoints;
    renderTotalScore();
    checkStatusofGame();
});