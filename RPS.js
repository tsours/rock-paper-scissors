let playerWins = 0;
let playerLoses = 0;
let playerTies = 0;
let playerSelection;
let computerSelection;

let buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

function getComputerChoice() {
    let possibleChoices = ['rock', 'paper', 'scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}


function playRound (playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    console.log("You selected: " + playerSelection)
    console.log("Computer has selected: " + computerSelection)
    if (playerSelection == computerSelection){
        playerTies = ++playerTies;
        tieScore();
        
    }else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        playerWins = ++playerWins;
        playerScore();
        
    }else {
        playerLoses = ++playerLoses;
        computerScore();
      }   
    
      console.log(`Current Score: You: ${playerWins} Computer: ${playerLoses} Tie: ${playerTies}`)

};

function playerScore(){
    let playerWinBox = document.querySelector("#playerWins");
    playerWinBox.textContent = playerWins
}

function computerScore(){
    let computerWinBox = document.querySelector("#playerLoses");
    computerWinBox.textContent = playerLoses
}

function tieScore(){
    let tieScoreBox = document.querySelector("#playerTies");
    tieScoreBox.textContent = playerTies
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})
 
//function game() {
 //   for (let i = 0; i < 13; i++) { 
 //      playRound();
//       if (playerWins === 5){
 //       console.log('Congrats You Win!!!');
 //       break
 //      } else if (playerLoses === 5){
 //       console.log('You Lost! Play again???');
//        break
//       } else {
 //       continue
//       };

//    }
//}
//console.log(game());