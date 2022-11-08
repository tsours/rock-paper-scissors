let playerWins = 0
let playerLoses = 0
let playerTies = 0
let winner = ''

function getComputerChoice () {
    let possibleChoices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase()
    playerSelection = playerSelection().toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! Rock beats Scissors');
        playerWins = ++playerWins;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You Lose! Paper beats Rock');
        playerLoses = ++playerLoses;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        playerLoses = ++playerLoses;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats Paper');
        playerWins = ++playerWins;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win! Paper beats Rock');
        playerWins = ++playerWins;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! Scissors beats Paper')
        playerLoses = ++playerWins;
    } else {
        console.log(`It's a tie!`);
        playerTies = ++playerTies;
    }
} 

let computerChoice = getComputerChoice();

function game(playRound) {
    for (let i = 0; i < 5; i++) { 
        playerSelection = window.prompt('Choose Rock, Paper, or Scissors: ')       
        console.log("You selected: " + playerSelection)
        console.log("Computer has selected: " + computerChoice)
        
        console.log(`Current Score: You: ${playerWins} Computer: ${playerLoses} Tie Rounds: ${playerTies}`)

        if (playerWins > playerLoses){
            return 'Congrats! You are the winner!'
        } else if (playerWins < playerLoses) {
            return 'You Lose! Want to play again?'
        } else {
            return 'Tie game! Lets have another go!'
        }
    };

};
console.log(game(playRound))