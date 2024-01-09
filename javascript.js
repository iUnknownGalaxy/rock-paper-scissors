function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice(choice) {
    if(randomChoice === 1) {
        return "rock";
    } else if(randomChoice === 2) {
        return "pcissors";
    } else {
        return "paper";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Please pick Rock, Paper, or Scissors:");
    while(playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        playerChoice = prompt("Invalid input. Please re-enter your option (Rock, Paper, or Scissors): ")
    }
    return playerChoice.toLowerCase();
}

function getChoices() {
    randomChoice = getRandomIntInclusive(1,3);
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    return playRound(playerChoice, computerChoice);
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            console.log("It was a tie! Please re-play the round");
            return getChoices();
        } else if(computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats scissors"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else if(computerSelection === "paper") {
            console.log("It was a tie! Please re-play the round");
            return getChoices();
        } else {
            return "You lose! Scissors beats paper";
        }
    } else {
        if(computerSelection === "rock") {
            return "You lose! Rock beats scissors";
        } else if(computerSelection === "paper") {
            return "You Win! Scissors beats paper";
        } else {
            console.log("It was a tie! Please re-play the round");
            return getChoices();
        }
    }
}


let result = getChoices();
console.log(result);