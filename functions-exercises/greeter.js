/**
 * In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that
 * solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use 
 * he return values to greet the user with their full name.
 */
const rlSync = require('readline-sync');

function greet() {
  // Prompt user
  const firstName = rlSync.question("What's your first name? ");
  const lastName = rlSync.question("What's your last name? ");

  return `Hello, ${firstName} ${lastName}!`;
}

console.log(greet());