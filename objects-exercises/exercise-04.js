// Create an array from the keys of object obj below, with all values converted to uppercase. 
// Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const keysArr = Object.keys(obj).map(el => el.toUpperCase());

console.log(keysArr);