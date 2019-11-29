// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // Logs [1, 4, 3] because array1[1] = 4 mutates the array1, and array2 is also pointing the same location in the memory so it's mutated, too