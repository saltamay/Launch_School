// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// foo() create another bar variable within its scope however it does not log or return anything so we don't see the new variable
// console.log statement logs the value of globally scoped bar variable