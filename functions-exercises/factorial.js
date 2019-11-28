
/**
 * Use the times function shown below to write a program that logs the value of 1! (one factorial), 
 * 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.
 */

function times(number1, number2) {
  let result = number1 * number2;
  // console.log(result); 
  return result;
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}


console.log(`1! = ${times(1, factorial(1))}`); // 
console.log(`2! = ${times(2, factorial(1))}`); // 
console.log(`3! = ${times(3, factorial(2))}`); // 
console.log(`4! = ${times(4, factorial(3))}`); // 
console.log(`5! = ${times(5, factorial(4))}`); // 
