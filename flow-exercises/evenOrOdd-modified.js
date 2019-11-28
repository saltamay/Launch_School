/**
 * Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. 
 * If it isn't, the function should issue an error message and return.
 */

function evenOrOdd(number) {

  if (typeof number !== 'number') {
    console.log('Please enter a valid number.');
    return;
  }

  return number % 2 === 0 ? console.log('even') : console.log('odd');
}

evenOrOdd('Hey!!!');
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(undefined);
evenOrOdd(Number('3'));
