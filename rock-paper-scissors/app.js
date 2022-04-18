function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const choices = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

function computerPlay() {
  return choices[randomInteger(0, 2)];
}

function playRound(playerSelection, computerSelection) {
  // Plays a single round of rock paper scissors and returns the result
  var gameResult;

  if (playerSelection == computerSelection) {
    gameResult = "draw";
  } else if (playerSelection == "scissors") {
    gameResult = computerSelection == "rock" ? "lose" : "win";
  } else if (playerSelection == "rock") {
    gameResult = computerSelection == "paper" ? "lose" : "win";
  } else if (playerSelection == "paper") {
    gameResult = computerSelection == "scissors" ? "lose" : "win";
  }
  return gameResult;
}

function getUserInput() {
  // Get the user input, error check and map to a correct choice
  const promptText = "Enter choice: \n 0: rock \n 1: paper \n 2: scissors";

  while (true) {
    const userInput = prompt(promptText);
    if (Object.keys(choices).includes(String(userInput))) {
      return choices[userInput];
    } else {
      alert("Invalid selection");
    }
  }
}

function game(n_games) {
  // Play a number of games
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < n_games; i++) {
    let computerSelection = computerPlay();
    let playerSelection = getUserInput();
    let gameResult = playRound(playerSelection, computerSelection);
    console.log(gameResult);
  }
}

game(1);
