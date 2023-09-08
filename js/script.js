// DOM Elements
const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEl = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");
const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// variables
let valueStrInMemory = null;
let operatorInMemory = null;

// Functions
const getValueAsStr = () => valueEl.textContent.split(",").join("");

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === ".") {
    valueEl.textContent += ".";
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === "0") {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === "addition") {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === "subtraction") {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === "multiplication") {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === "division") {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue("0");
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue("0");
};

// Add Event Listeners to functions
acEl.addEventListener("click", () => {
  setStrAsValue("0");
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === "-0") {
    setStrAsValue("0");
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue("-" + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener("click", () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});

// add event listeners to operators
additionEl.addEventListener("click", () => {
  handleOperatorClick("addition");
});
subtractionEl.addEventListener("click", () => {
  handleOperatorClick("subtraction");
});
multiplicationEl.addEventListener("click", () => {
  handleOperatorClick("multiplication");
});
divisionEl.addEventListener("click", () => {
  handleOperatorClick("division");
});
equalEl.addEventListener("click", () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});

// Add Event Listeners to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener("click", () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes(".")) {
    setStrAsValue(currentValueStr + ".");
  }
});

// Set up the time
 const hourElement = document.getElementById("hour");

 function updateClock() {
  const now = new Date();
   const hours = now.getHours().toString().padStart(2, "0"); // Get hours (with leading zero)
 const minutes = now.getMinutes().toString().padStart(2, "0"); // Get minutes (with leading zero)

  // Update the content of the "hour" element with the current time
 hourElement.textContent = `${hours}:${minutes}`;
 }

 // Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);




// // Selecting elements
// const valueElement = document.querySelector(".value");
// const buttons = document.querySelectorAll(".button");

// let currentValue = "0"; // Store the current value
// let operator = ""; // Store the current operator
// let prevValue = ""; // Store the previous value
// let isNewValue = true; // Indicates if a new value should be started
// let calculated = false; // Indicates if a calculation has been completed

// const hourElement = document.getElementById("hour");

// function updateClock() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0"); // Get hours (with leading zero)
//   const minutes = now.getMinutes().toString().padStart(2, "0"); // Get minutes (with leading zero)

//   // Update the content of the "hour" element with the current time
//   hourElement.textContent = `${hours}:${minutes}`;
// }

// // Update the clock immediately and then every second
// updateClock();
// setInterval(updateClock, 1000);

// // Function to update the display
// function updateDisplay() {
//   if (operator === "=") {
//     // If the previous action was "=", just display the current value
//     valueElement.textContent = currentValue;
//   } else {
//     // Display the current action (e.g., "5x8")
//     valueElement.textContent = `${prevValue} ${operator} ${
//       isNewValue ? "" : currentValue
//     }`;
//   }
// }

// // Function to perform calculations
// function operate(a, b, operator) {
//   a = parseFloat(a);
//   b = parseFloat(b);
//   switch (operator) {
//     case "+":
//       return (a + b).toString();
//     case "-":
//       return (a - b).toString();
//     case "×":
//       return (a * b).toString();
//     case "÷":
//       if (b === 0) {
//         return "Error";
//       }
//       return (a / b).toString();
//     default:
//       return "0";
//   }
// }

// // Add click event listeners to the buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonText = button.textContent;

//     // Handle digit buttons
//     if (!isNaN(buttonText) || buttonText === ".") {
//       if (isNewValue || calculated) {
//         currentValue = buttonText;
//         isNewValue = false;
//         calculated = false;
//       } else {
//         currentValue += buttonText;
//       }
//     }

//     // Handle operator buttons
//     else if (button.classList.contains("operator")) {
//       if (operator !== "") {
//         // Perform the previous calculation and store the result
//         currentValue = operate(prevValue, currentValue, operator);
//         calculated = true;
//       } else {
//         calculated = false; // If it's the first operator after a calculation
//         if (prevValue === "") {
//           prevValue = currentValue; // Use the result as the first operand
//           isNewValue = true; // Start a new value after using the result as the first operand
//         }
//       }
//       operator = buttonText;
//       isNewValue = true; // Start a new value after an operator
//     }

//     // Handle equal button
//     else if (buttonText === "=") {
//       if (operator !== "" && prevValue !== "") {
//         currentValue = operate(prevValue, currentValue, operator);
//         operator = "=";
//         isNewValue = true; // Start a new value after the equal button
//         calculated = true; // Indicate that a calculation has been completed
//       }
//     }

//     // Handle clear button
//     else if (buttonText === "AC") {
//       currentValue = "0";
//       operator = "";
//       prevValue = "";
//       isNewValue = true; // Start a new value after clearing
//       calculated = false; // Reset the calculated value
//     }

//     // Handle sign change (±) button
//     else if (buttonText === "±") {
//       currentValue = (-parseFloat(currentValue)).toString();
//     }

//     // Handle percentage (%) button
//     else if (buttonText === "%") {
//       currentValue = (parseFloat(currentValue) / 100).toString();
//     }

//     // Update the display
//     updateDisplay();
//   });
// });
