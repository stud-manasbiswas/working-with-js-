// rock paper scissiors
const choices=["rock","paper","scissors"]
const playesDisplay = document.getElementById("playesDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay= document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let res=""

    if(playerChoice === computerChoice){
        res = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                res = (computerChoice === "scissors") ? "YOU WIN!" :"YOU LOSE"

                break;
            case "paper":
                res = (computerChoice === "rock") ? "YOU WIN!" :"YOU LOSE!"

                break;
            case "scissors":
                res = (computerChoice === "paper") ? "YOU WIN!" :"YOU LOSE!"

                break;
        }
    }

    playesDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`
    resultDisplay.textContent = res;


    resultDisplay.classList.remove("greenText","redText")
    switch(res){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent =playerScore;
            break;
        case "YOU LOSE!":
            
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent =computerScore;
            break;
    }
}