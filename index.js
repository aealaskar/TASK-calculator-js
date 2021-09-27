/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let consoleText = "";
let num1;
let num2;
let operation;
let result;

function buttonClick(text) {
  // if (text === "=") {
  //   printOnConsole(result);
  // }
  if (text === "AC") {
    clear();
  } else if (isNumber(text)) {
    consoleText += text;
    printOnConsole(removeZero(consoleText));
  } else if (isOperation(text)) {
    if (num1 === undefined) {
      num1 = consoleText;
      consoleText = "0";
      operation = text;
    } else if (num2 === undefined || text === "=") {
      num2 = consoleText;
      if (operation === "+") {
        result = +num1 + +num2;
        printOnConsole(result);
      }
      // } else if (text === "=") {
      //   printOnConsole(result);
      // }
      // switch (operation) {
      //   case "+":
      //     printOnConsole(+num1 + +num2);
      //     result = +num1 + +num2;
      //     break;
      //   case "-":
      //     printOnConsole(+num1 - +num2);
      //     result = +num1 - +num2;
      //     break;
      //   case "÷":
      //     printOnConsole(+num1 / +num2);
      //     result = +num1 / +num2;
      //     break;
      //   case "x":
      //     printOnConsole(+num1 * +num2);
      //     result = +num1 * +num2;
      //     break;
    }
  }
}

function isOperation(text) {
  return text === "-" || text === "+" || text === "x" || text === "÷";
}

function removeZero(text) {
  return +text;
}

function isNumber(text) {
  return parseInt(text) >= 0 && parseInt(text) <= 9;
}

function clear() {
  printOnConsole("0");
  num1 = undefined;
  num2 = undefined;
  consoleText = "";
}
/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("0");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
