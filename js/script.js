// const result = document.querySelector(".result");
// const button = document.querySelectorAll("button");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", () => {
//     const buttonValue = button[i].textContent;
//     if (buttonValue === "AC") {
//       clearResult();
//     } else if (buttonValue === "%") {
//       applyPercentage();
//     } else if (buttonValue === "+/-") {
//       toggleSign();
//     } else if (buttonValue === "=") {
//       calculateResult();
//     } else {
//       appendValue(buttonValue);
//     }
//   });
// }

// function clearResult() {
//   result.value = "";
// }

// function applyPercentage() {
//   result.value = eval(result.value) / 100;
// }

// function toggleSign() {
//   result.value = eval(result.value) * -1;
// }

// function calculateResult() {
//   result.value = eval(result.value);
// }

// function appendValue(buttonValue) {
//   result.value = result.value + buttonValue;
// }

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.textContent));
});

function handleButtonClick(buttonValue) {
  switch (buttonValue) {
    case "AC":
      clearResult();
      break;
    case "=":
      calculateResult();
      break;
    case "%":
      applyPercentage();
      break;
    case "+/-":
      toggleSign();
      break;
    default:
      appendValue(buttonValue);
  }
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = Function('"use strict";return (' + result.value + ")")();
  } catch (error) {
    result.value = "Error";
  }
}

function applyPercentage() {
  result.value = parseFloat(result.value) / 100 || "";
}

function toggleSign() {
  result.value = parseFloat(result.value) * -1 || "";
}

function appendValue(buttonValue) {
  result.value += buttonValue;
}
