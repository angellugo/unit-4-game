var debug = false;

var wins = 0;
var losses = 0;
var randomNumber;
var totalPoints;
var rubyPoints;
var diamondPoints;
var yellowDiamondPoints;
var emeraldPoints;

function resetGame() {
    debug && console.log("__________________________Game Reset_________________________");
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    debug && console.log("randomNumber", randomNumber);
    totalPoints = 0;
    rubyPoints = Math.floor(Math.random() * 12) + 1;
    debug && console.log("rubyPoints", rubyPoints);
    diamondPoints = Math.floor(Math.random() * 12) + 1;
    debug && console.log("diamondPoints", diamondPoints);
    yellowDiamondPoints = Math.floor(Math.random() * 12) + 1;
    debug && console.log("yellowDiamondPoints", yellowDiamondPoints);
    emeraldPoints = Math.floor(Math.random() * 12) + 1;
    debug && console.log("emeraldPoints", emeraldPoints);

    // document.querySelector("#randomNumber").innerHTML = "Random number: " + randomNumber;
    $('#randomNumber').text("Random number: " + randomNumber);
    // document.querySelector("#wins").innerHTML = "Wins: " + wins;
    $('#wins').text("Wins: " + wins);
    // document.querySelector("#losses").innerHTML = "Losses: " + losses;
    $('#losses').text("Losses: " + losses);
    renderTotalPoints();

};

function renderTotalPoints() {
    document.querySelector("#totalPoints").innerHTML = "Total Points: " + totalPoints;
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
    if (totalPoints > randomNumber){
        playerLoses();
    }else if ( totalPoints === randomNumber){
        playerWins();
    }
    //else continue playing
}

resetGame();
$('#rubiesButton').on("click", function(event){
    totalPoints += rubyPoints;
    renderTotalPoints();
    checkStatusofGame();
});

$('#diamondButton').on("click", function(event){
    totalPoints += diamondPoints;
    renderTotalPoints();
    checkStatusofGame();
});

$('#yellowDiamondButton').on("click", function(event){
    totalPoints += yellowDiamondPoints;
    renderTotalPoints();
    checkStatusofGame();
});

$('#emeraldButton').on("click", function(event){
    totalPoints += emeraldPoints;
    renderTotalPoints();
    checkStatusofGame();
});