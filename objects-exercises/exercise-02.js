// Which of the following values are valid keys for an object?

// 1 => valid
// '1' => valid
// undefined => valid
// 'hello world' => valid
// true => valid
// 'true' => valid

const obj = {
  1: 1,
  // '1': 1,
  undefined: 'undefined',
  'hello world': 'hello world',
  true: true,
  'true': 'true'
}

console.log(obj);