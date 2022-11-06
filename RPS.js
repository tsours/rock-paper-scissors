function getComputerChoice () {
    let possibleChoices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return randomChoice
}

console.log(getComputerChoice())
