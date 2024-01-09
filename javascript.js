function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice(choice) {
    if(randomChoice === 1) {
        return "Rock";
    } else if(randomChoice === 2) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

let randomChoice = getRandomIntInclusive(1,3);
let computerChoice = getComputerChoice();
console.log(randomChoice);
console.log(computerChoice);