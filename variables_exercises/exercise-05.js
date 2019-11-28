// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // logs bar cause bar is the value of the variable that is scoped globally in this instane