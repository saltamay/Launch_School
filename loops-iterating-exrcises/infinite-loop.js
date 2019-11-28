// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// In the condition statemnet instead of checking for a condition we have a variable expression that always evalutes to true
// And the loop can never go into if statement cause it resets the caounter to 1 every time
