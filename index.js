/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let firstNumber = []
let secondNumer = []
const sum = Number.firstNumber + Number.secondNumer
const sub = Number.firstNumber - Number.secondNumer
const div = Number.firstNumber / Number.secondNumer
const multi = Number.firstNumber * Number.secondNumer
const nums = [1,2,3,4,5,6,7,8,9,0,"."]
function buttonClick(text) {
  
 /*  nums.forEach(num => {
    num !== text
    console.log('working')
  }); */
/* 
  if (text !== nums.forEach(num => num !== text)){
    console.log('working')
  } */

  if (text === "x" || text === "-"|| text === "+"||text === "÷"){
    
    return;
  }

  if (text === "x" || text === "-"|| text === "+"||text === "÷" ) {
    secondNumer 
    printOnConsole(secondNumer.reduce((a, b) => a.toString() + b.toString()))
    console.log(secondNumer)
  }

  console.log("Clicking", text);
  if (text === "AC") {
    firstNumber =[]
    printOnConsole('0')
    return;
  }
  if (firstNumber[0] === 0){
    firstNumber =[]
    return;
  }
  firstNumber.push(text)
  printOnConsole(firstNumber.reduce((a, b) => a.toString() + b.toString()))
}

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
