const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  // if current display value is 0, replace it, if not add number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;

  displayValue.textContent = displayValue;
}

function addDecimal() {
  // if no decimal, add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// add event listener for numbers, operators and decimal buttons
inputBtns.forEach((btn) => {
  if (btn.classList.length === 0) {
    btn.addEventListener("click", () => sendNumberValue(btn.value));
  } else if (btn.classList.contains("operator")) {
    btn.addEventListener("click", () => sendNumberValue(btn.value));
  } else if (btn.classList.contains("decimal")) {
    btn.addEventListener("click", () => addDecimal());
  }
});

// reset display
function resetAll() {
  calculatorDisplay.textContent = "0";
}

// event listener
clearBtn.addEventListener("click", resetAll);
