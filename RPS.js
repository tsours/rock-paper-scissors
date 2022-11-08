function getComputerChoice () {
    let possibleChoices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log('You Win! Rock beats Scissors');
        playerWins += playerWins + 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        console.log('You Lose! Paper beats Rock');
        playerLoses += playerLoses + 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You Lose! Rock beats Scissors');
        playerLoses += playerLoses + 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You win! Scissors beats Paper');
        playerWins += playerWins + 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log('You win! Paper beats Rock');
        playerWins += playerWins + 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        console.log('You lose! Scissors beats Paper')
        playerLoses += playerLoses + 1;
    } else {
        console.log(`It's a tie!`);
        playerTies += playerTies + 1
    }
} 

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log("You selected: " + playerSelection)
console.log("Computer has selected: " + computerSelection)
console.log(playRound(playerSelection, computerSelection));

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Choose Rock, Paper, or Scissors: ')
        let score = (playerWins, playerLoses)
        console.log(`Current Score: You: ${playerWins} Computer: ${playerLoses} `)

    }
}