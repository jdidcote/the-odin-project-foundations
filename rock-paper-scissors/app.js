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
  // Plays a single round of rock paper scissors
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

// Test for a number of rounds
function testRound(n_rounds) {
  const playerSelection = choices[0];

  for (let i = 0; i < n_rounds; i++) {
    let computerSelection = computerPlay();
    console.log("Starting new game... \n");
    console.log(
      "Player selected: " +
        playerSelection +
        " computer selected: " +
        computerSelection +
        "\n"
    );
    let roundResult = playRound(playerSelection, computerSelection);
    console.log("Round result: you " + roundResult);
    console.log("\n\n");
  }
}

testRound(10);
