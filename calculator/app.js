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

  handleDelete() {
    if (this.secondNumber != "") {
      this.secondNumber = this.secondNumber.slice(0, -1);
    } else if (this.operation != "") {
      this.operation = "";
    } else if (this.firstNumber != "") {
      this.firstNumber = this.firstNumber.slice(0, -1);
    }
  }

  addnewInput(newInput) {
    // First check if we should calculate
    if (this.checkShouldCalculate(newInput)) {
      this.calculate();
      return;
    }

    // Check for clear
    if (newInput == "Clear") {
      this.resetNumbers();
      this.resetResult();
      return;
    }

    // CHeck for delete
    if (newInput == "Delete") {
      this.handleDelete();
      return;
    }

    // First number
    if (
      this.operation == "" &&
      this.numbers.includes(newInput) &&
      isNaN(this.currentResult)
    ) {
      this.firstNumber += newInput;
    }

    // Operation
    if (
      this.operators.includes(newInput) &&
      this.secondNumber == "" &&
      this.firstNumber != ""
    ) {
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

function handleCalculatorInput(newInput) {
  calculation.addnewInput(newInput);
  inputArea.innerHTML = calculation.displayCalculation();
  if (isNaN(calculation.currentResult)) {
    resultArea.innerHTML = "";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleCalculatorInput(button.textContent.trim());
  });
});
