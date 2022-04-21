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

function changeDivColor(div) {
  div.style.backgroundColor = "black";
}

function handleGridColors() {
  const gridDivs = document.querySelectorAll(".grid-div");
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", () => {
      changeDivColor(gridDiv);
    });
  });
}

drawGrids();
handleGridColors();
