function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice(randomChoice) {
    if(randomChoice === 1) {
        return "rock";
    } else if(randomChoice === 2) {
        return "scissors";
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
    let randomChoice = getRandomIntInclusive(1,3);
    let computerChoice = getComputerChoice(randomChoice);
    let playerChoice = getPlayerChoice();
    return playRound(playerChoice, computerChoice);
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            console.log("It was a tie! Please re-play the round");
        } else if(computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return -1;
        } else {
            console.log("You win! Rock beats scissors");
            return 1;
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        } else if(computerSelection === "paper") {
            console.log("It was a tie! Please re-play the round");
        } else {
            console.log("You lose! Scissors beats paper");
            return -1;
        }
    } else {
        if(computerSelection === "rock") {
            console.log("You lose the round! Rock beats scissors");
            return -1;
        } else if(computerSelection === "paper") {
            console.log("You Win! Scissors beats paper");
            return 1;
        } else {
            console.log("It was a tie! Please re-play the round");
        }
    }
}



const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const container = document.getElementById("container");

rock.innerText = 'rock';
paper.innerText = 'paper';
scissors.innerText = 'scissors';

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice(getRandomIntInclusive(1,3)));
})

paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice(getRandomIntInclusive(1,3)));
})

scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice(getRandomIntInclusive(1,3)));
})