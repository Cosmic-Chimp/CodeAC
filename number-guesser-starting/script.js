let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//This will generate a random number 0-9
const generateTarget = number => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
        return true;
    } 
    else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        return humanScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}