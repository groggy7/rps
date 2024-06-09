const choices = new Map([
    [1, "rock"],
    [2, "paper"],
    [3, "scissors"]
]);

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3) + 1;

    if(choice >=1 && choice <=3 ) {
        return choices.get(choice)
    } else {
        console.log("internal server error")
    }
}

const getHumanChoice = () => {
    let choice = prompt("rock, paper or scissors?...");

    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.error("invalid choice");
    }
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log(`computer's choice: ${computerChoice} player's choice: ${humanChoice}. It's draw!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`human score is now: ${humanScore}`)
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        console.log(`computer score is now: ${computerScore}`)
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log("Congrats! You are the winner");
    } else if (computerScore > humanScore) {
        console.log("Sorry, You lost")
    } else {
        console.log("There is no winner, Draw!")
    }
}

playGame();