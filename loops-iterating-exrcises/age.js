// Modify the age.js program you wrote in the exercises for the Input/Output chapter.
// The updated code should use a for loop to display the future ages.

const rlSync = require('readline-sync');

let age = rlSync.question("What's your age? ");
age = Number(age);

for (let index = 0; index <= 40; index += 10) {

  if (index === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${index} years, you will be ${age + index} years old.`);
  }

}