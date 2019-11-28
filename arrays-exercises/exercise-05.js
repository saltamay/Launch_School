// Use the filter method to implement a function that returns a new array with all of the integers from the input array. 
// It should ignore all non-integer values from the input.

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const removeNonInteger = (arr) => {
  return arr.filter(el => {
    return Number.isInteger(el);
  })
}

let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]