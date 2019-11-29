// Given a list of numbers, write some code to find and display the largest numeric value in the list.

// [1, 6, 3, 2] => 6
// [-1, -6, -3, -2] => -1
// [2, 2] => 2

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 6, 3, 2]));
console.log(findMax([-1, -6, -3, -2]));
console.log(findMax([2, 2]));