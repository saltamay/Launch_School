/**
 * Write a program that uses a multiply method to multiply two numbers and returns the result. 
 * Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
 */

const rlSync = require('readline-sync');
let a, b;

function init() {
  a = rlSync.question("Enter the first operand: ");
  b = rlSync.question("Enter the second operand: ");

  const result = multiply(a, b);

  console.log(`${a} * ${b} = ${result}`);
}

function multiply(a, b) {
  return a * b;
}

init();
