// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  console.log(argument2)
}

bar(foo, qux);

console.log(foo.a); // Logs hi
// console.log(qux); // logs hello

// The reason is that objects are mutuble and qux is declared with let keyword that allows reassignment.
// The above was my initial solution but the code does not behave as expected.
// I think the reason is function bar is creating a new variable without using const, let or var keyword
// In this case argument2 within the function is completely independent from the arguments passed in.
// bar also changes qux value if we add console.log(argument2) within the bar function

qux = 'hi';
console.log(qux); // this reassigns without any problem

// function set(a, b) {
//   a = 5;
//   console.log(a);
//   console.log(b);
// }

// set(3, 10)