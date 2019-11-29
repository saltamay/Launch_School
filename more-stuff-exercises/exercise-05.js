// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// Splits strings into an array by the spaces, reverse the order of the elements in that array, then maps through every word/value
// getting each value's length and returning a new array containing length values