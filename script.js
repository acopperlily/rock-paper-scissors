let userScore = 0;
let computerScore = 0;
let tie = 0;

// Game starts when user clicks a button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = button.id;

        // Display user and computer choices
        const battle = document.querySelector('#battle');
        battle.textContent = `${playerSelection} vs. ${computerSelection}`;

        // Play one round
        const round = playRound(playerSelection, computerSelection);

        // Display winner of round
        const winner = document.querySelector('#winner');
        winner.textContent = `${round}`;

        // Display scores
        const scores = document.querySelector('#score')
        scores.textContent = `You: ${userScore} Computer: ${computerScore} Tie: ${tie}`;

        // Check scores
        let champion = checkScore(userScore, computerScore);

        // Display champion of all rounds
        let champ = document.querySelector('#champ');

        if (champion) {
            champ = document.querySelector('#champ');
            champ.textContent = champion;

            // Reset scores
            userScore = 0;
            computerScore = 0;
            tie = 0;
        } else {
            champ.textContent = '';
        }
    });
});

// Computer makes choice
function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function updateScore(userWon) {
    if (userWon) {
        userScore++;
    } else {
        computerScore++;
    }
}

// Play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tie++;
        return "It's a tie!";
    }

    let userWon = false;

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            userWon = true;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            userWon = true;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            userWon = true;
        }
    } else {
        return "Invalid input!";
    }

    updateScore(userWon);

    if (userWon) {
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function checkScore(userScore, computerScore) {
    if (userScore === 5) {
        return 'You win!';
    } else if (computerScore === 5) {
        return 'The computer wins!';
    }
}