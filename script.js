// computerChoice = () => "1";

getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

getPlayerChoice = () => {
    let choice;
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Enter rock, paper, or scissors")
        choice = choice.toLowerCase();
    }
    return choice;
}

checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) { return 0; }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) { return 1; }
    else { return -1; }
}

function playRound(playerSelection, computerSelection){
    switch (checkWinner(playerSelection, computerSelection)) {
        case 1: return `You Win! ${playerSelection} beats ${computerSelection}`;
        case -1: return `You Lose! ${computerSelection} beats ${playerSelection}`;
        default: return "It's a Tie!";
    }
}

function playGame() {
    let playerScore = 0;
    let playAgain;

    console.log("-----------------------------");
    
    for (let i = 0; i < 5; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if (result.startsWith(`You Win!`)) { playerScore++; }
    }
    
    if (playerScore > 2) { console.log("You Win The Game!") }
    else { console.log("You Lose The Game!") }
    
    do {
        playAgain = prompt("Play again? Y/N?");
        playAgain = playAgain.toLowerCase(); // Convert to lowercase right away
    } while (playAgain != 'y' && playAgain != 'n');
    
    if (playAgain === 'y') { playGame(); }
}

playGame()