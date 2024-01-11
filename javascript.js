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
            showRoundWinner.textContent = "It was a tie! Please re-play the round";
            return 0;
        } else if(computerSelection === "paper") {
            showRoundWinner.textContent = "You lose! Paper beats Rock";
            return -1;
        } else {
            showRoundWinner.textContent = "You win! Rock beats scissors";
            return 1;
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            showRoundWinner.textContent = "You win! Paper beats Rock";
            return 1;
        } else if(computerSelection === "paper") {
            showRoundWinner.textContent = "It was a tie! Please re-play the round";
            return 0;
        } else {
            showRoundWinner.textContent = "You lose! Scissors beats paper";
            return -1;
        }
    } else {
        if(computerSelection === "rock") {
            showRoundWinner.textContent = "You lose! Rock beats scissors";
            return -1;
        } else if(computerSelection === "paper") {
            showRoundWinner.textContent = "You Win! Scissors beats paper";
            return 1;
        } else {
            showRoundWinner.textContent = "It was a tie! Please re-play the round";
            return 0;
        }
    }
}





const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const container = document.getElementById('container');
const scoreboard = document.createElement('div');
const showPlayerScore = document.createElement('p');
const showComputerScore = document.createElement('p');
const showRoundWinner = document.createElement('p');

rock.innerText = 'rock';
paper.innerText = 'paper';
scissors.innerText = 'scissors';

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    let newScore = playRound("rock", getComputerChoice(getRandomIntInclusive(1,3)));
    checkScore(newScore);
    showPlayerScore.textContent = "You: " + playerScore;
    showComputerScore.textContent = "Computer: " + computerScore;
})

paper.addEventListener('click', () => {
    let newScore = playRound("paper", getComputerChoice(getRandomIntInclusive(1,3)));
    checkScore(newScore);
    showPlayerScore.textContent = "You: " + playerScore;
    showComputerScore.textContent = "Computer: " + computerScore;
})

scissors.addEventListener('click', () => {
    let newScore = playRound("scissors", getComputerChoice(getRandomIntInclusive(1,3)));
    checkScore(newScore);
    showPlayerScore.textContent = "You: " + playerScore;
    showComputerScore.textContent = "Computer: " + computerScore;
})

function checkScore(newScore) {
    if(newScore < 0) {
        computerScore++;
    } else if(newScore > 0) {
        playerScore++;
    }
}
container.appendChild(scoreboard);
scoreboard.appendChild(showPlayerScore);
scoreboard.appendChild(showComputerScore);
scoreboard.appendChild(showRoundWinner);