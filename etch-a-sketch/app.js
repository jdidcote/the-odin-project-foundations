function drawGrids() {
  const drawArea = document.querySelector(".draw-area");
  const numGrids = document.querySelector(".num-grids").value;

  drawArea.style.gridTemplateColumns = "repeat(" + numGrids + ", 1fr)";

  for (let i = 0; i < numGrids ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    drawArea.appendChild(gridDiv);
  }
}

function refreshGrids() {
  // Removes all currently drawn grids and redraws
  // This is used for resetting (and changing number of grids)
  const currentGrids = document.querySelectorAll(".grid-div");
  currentGrids.forEach((currentGrid) => {
    currentGrid.remove();
  });
  main();
}

function handleReset(divs) {
  // Resets all div colors back to white if reset button pressed
  // Also recalls drawGrid to create different grid size
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    refreshGrids();
  });
}

function changeDivColor(div) {
  if (div.style.backgroundColor != "") {
    return;
  }
  // Taken from: https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColorInput = document.querySelector(".random-colors");

  if (randomColorInput.checked) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor;
  } else {
    div.style.backgroundColor = "black";
  }
}

function handleGridColors() {
  const gridDivs = document.querySelectorAll(".grid-div");
  handleReset(gridDivs);

  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      changeDivColor(gridDiv);
    });
  });
}

function main() {
  drawGrids();
  handleGridColors();
}

main();
