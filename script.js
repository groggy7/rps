const choices = new Map([
    [1, "rock"],
    [2, "paper"],
    [3, "scissors"]
]);

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3) + 1;

    if(choice >= 1 && choice <= 3) {
        return choices.get(choice);
    } else {
        console.log("internal server error");
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

const displayWinner = () => {
    const result = document.querySelector(".results");
    result.innerText = `Winner is ${humanScore > computerScore ? "human" : "computer"}.
    Human Score: ${humanScore} : ${computerScore} Computer Score`;
}
const gameButtons = document.querySelectorAll(".game-button")

gameButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if(humanScore < 5 && computerScore < 5) {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        if(humanScore >= 5 || computerScore >= 5) {
            displayWinner();
        }
    }
    })
})
