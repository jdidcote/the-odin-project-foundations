function calculate(a, b, operation) {
  a = parseInt(a);
  b = parseInt(b);

  let calculation;

  switch (operation) {
    case "+":
      calculation = a + b;
      break;
    case "-":
      calculation = a - b;
      break;
    case "*":
      calculation = a * b;
      break;
    case "/":
      calculation = a / b;
      break;
  }
  return calculation;
}

var inputArea = document.querySelector(".number-area");
var resultArea = document.querySelector(".result-area");

function updateResultArea(result) {
  resultArea.innerHTML = result;
}

class Calculation {
  constructor() {
    this.resetNumbers();
    this.resetResult();
    this.operators = ["+", "-", "*", "/"];
    this.numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  resetNumbers() {
    this.firstNumber = "";
    this.operation = "";
    this.secondNumber = "";
  }

  resetResult() {
    this.currentResult = NaN;
  }

  checkShouldCalculate(newInput) {
    const shouldCalculate = this.secondNumber != "" && newInput == "=";
    return shouldCalculate;
  }

  calculate() {
    const result = calculate(
      this.firstNumber,
      this.secondNumber,
      this.operation
    );
    this.resetNumbers();
    this.currentResult = result;
    this.firstNumber = result;
    updateResultArea(result);
  }

  addnewInput(newInput) {
    if (this.checkShouldCalculate(newInput)) {
      this.calculate();
      return;
    }

    // First number
    if (this.operation == "" && this.numbers.includes(newInput) && isNaN(this.currentResult)) {
      this.firstNumber += newInput;
    }

    // Operation
    if (this.operators.includes(newInput) && this.secondNumber == "" && this.firstNumber != "") {
      this.operation = newInput;
    }

    // Second number
    if (this.operation != "" && this.numbers.includes(newInput)) {
      this.secondNumber += newInput;
    }
  }

  displayCalculation() {
    return this.firstNumber + " " + this.operation + " " + this.secondNumber;
  }
}

const calculation = new Calculation();

function updateinputArea(newInput, resetCalculation = false) {
  if (resetCalculation) {
    const calculation = new Calculation();
  }

  calculation.addnewInput(newInput);
  inputArea.innerHTML = calculation.displayCalculation();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateinputArea(button.textContent.trim());
  });
});
