// Write a dynamic greeter program named greeter.js. 
// The program should contain a function that takes one argument, name, and logs a Hello, {name}! message to the console. 
// You should replace {name} with the value of the name argument. For instance:

/**
 * $ node greeter.js
 * What is your name? Sue
 * Hello, Sue!
 */

const rlSync = require('readline-sync');
const name = rlSync.question("What's your name? ");
console.log(`Hello, ${name}!`);