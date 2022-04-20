const TOTAL_GAMES = 5;

const choices = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

var gameScore = {
  computer: 0,
  player: 0,
  gameStatus: 1,
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  return choices[randomInteger(0, 2)];
}

function updateGameScore(result) {
  if (result == "win") {
    gameScore["player"] += 1;
  } else if (result == "lose") {
    gameScore["computer"] += 1;
  }
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

function checkGameStatus(resultText, gameResult) {
  const gameOverText = "Game over, you ";

  if (gameScore["computer"] >= TOTAL_GAMES) {
    resultText.innerHTML = gameOverText + "lose!";
    gameScore["gameStatus"] = 0;
  } else if (gameScore["player"] >= TOTAL_GAMES) {
    resultText.innerHTML = gameOverText + "win!";
    gameScore["gameStatus"] = 0;
  } else {
    resultText.innerHTML = "Round result: " + gameResult;
  }
}

function updateRoundResult(gameResult) {
  const resultText = document.querySelector(".round-result-text");
  checkGameStatus(resultText, gameResult);
}

function disableButtonsIfDone(button) {
  if (gameScore["gameStatus"] == 0) {
    button.disabled = "disabled";
  }
}

function handleGame(button) {
  let gameResult = playRound(button.id, computerPlay());
  updateRoundResult(gameResult);
  updateGameScore(gameResult);
}

const userInput = document.querySelectorAll(".input-button");
userInput.forEach((button) => {
  disableButtonsIfDone(button);
  button.addEventListener("click", () => {
    handleGame(button);
  });
});
