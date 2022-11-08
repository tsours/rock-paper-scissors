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
    if (playerSelection == computerSelection){
        console.log('Its a tie!');
        playerTies = ++playerTies;
    }else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        console.log('You Win!');
        playerWins = ++playerWins;
    }else {
        console.log('You Lose!');
        playerLoses = ++playerLoses
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