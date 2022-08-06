//Random select computer choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
//Compare computer choice and user choice
// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         computerWin++;
//         return "Computer wins! Computer chose paper.";
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         playerWin++;
//         return "Player wins! Computer chose scissors.";
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         playerWin++;
//         return "Player wins! Computer chose rock.";
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         computerWin++;
//         return "Computer wins! Computer chose scissors.";
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         computerWin++;
//         return "Computer wins! Computer chose rock.";
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         playerWin++;
//         return "Player wins! Computer chose paper.";
//     }
// }

function game() {
  let roundsPlayed = 0;
  let playerWin = 0;
  let computerWin = 0;
  let gameWinner = "";

  while (roundsPlayed < 5) {
    roundsPlayed++;
    computerSelection = getComputerChoice();
    playerSelection = prompt(
      "Pick a choice between: Rock, Paper and Scissors"
    ).toLowerCase();
    console.log(playRound(playerSelection, computerSelection));

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWin++;
        return "Computer wins! Computer chose paper.";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        playerWin++;
        return "Player wins! Computer chose scissors.";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWin++;
        return "Player wins! Computer chose rock.";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        computerWin++;
        return "Computer wins! Computer chose scissors.";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        computerWin++;
        return "Computer wins! Computer chose rock.";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        playerWin++;
        return "Player wins! Computer chose paper.";
      }
    }
  }

  if (playerWin > computerWin) {
    gameWinner = "Player wins!";
  } else if (playerWin === computerWin) {
    gameWinner = "Tie!";
  } else if (playerWin < computerWin) {
    gameWinner = "Computer wins!";
  }

  console.log("Player won" + " " + playerWin + " " + "rounds");
  console.log("Computer won" + " " + computerWin + " " + "rounds");
  console.log(gameWinner);
}

console.log(game());

// //Play 5 rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         computerSelection = getComputerChoice();
//         playerSelection = prompt("Pick a choice between: Rock, Paper and Scissors").toLowerCase();
//         console.log(playRound(playerSelection, computerSelection));
//      }
// }

// console.log(game());
