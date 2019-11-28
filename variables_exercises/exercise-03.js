// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// ReferenceError; the foo is scoped within the curly braces and cannot be accessed from outside of that scope