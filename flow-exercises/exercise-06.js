// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

/**
 * Logs Not Empty
 * Because falsy values include
 * false
 * The number 0
 * An empty string ('')
 * undefined
 * null
 * NaN
 * [] => evaluates to true
 */