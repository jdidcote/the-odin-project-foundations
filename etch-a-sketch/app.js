const GRID_NUMBER = 16;

// HTML elements
const drawArea = document.querySelector(".draw-area");

function drawGrids() {
  for (let i = 0; i < GRID_NUMBER ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    drawArea.appendChild(gridDiv);
  }
}

function resetAllDivColors(divs) {
  // Resets all div colors back to white if reset button pressed
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    divs.forEach((div) => {
      div.style.backgroundColor = "white";
    });
  });
}

function changeDivColor(div) {
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
  resetAllDivColors(gridDivs);

  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      changeDivColor(gridDiv);
    });
  });
}

drawGrids();
handleGridColors();
