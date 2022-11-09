let playerWins = 0;
let playerLoses = 0;
let playerTies = 0;
let playerSelection;
let computerSelection;
let winner = '';

function getComputerChoice() {
    let possibleChoices = ['rock', 'paper', 'scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    playerSelection = window.prompt('Choose Rock, Paper, or Scissors: ')
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    console.log("You selected: " + playerSelection)
    console.log("Computer has selected: " + computerSelection)
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
        playerLoses = ++playerLoses;
      }   
    
      console.log(`Current Score: You: ${playerWins} Computer: ${playerLoses} Tie: ${playerTies}`)

};
 
function game() {
    for (let i = 0; i < 13; i++) { 
       playRound();
       if (playerWins === 5){
        console.log('Congrats You Win!!!');
        break
       } else if (playerLoses === 5){
        console.log('You Lost! Play again???');
        break
       } else {
        continue
       };

    }
}
console.log(game());