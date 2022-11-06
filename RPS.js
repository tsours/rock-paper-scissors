function getComputerChoice () {
    let possibleChoices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}

console.log(getComputerChoice())

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return 'You win! Paper beats Rock'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return 'You lose! Scissors beats Paper'
    } else {
        return `It's a tie!`
    }
} 
