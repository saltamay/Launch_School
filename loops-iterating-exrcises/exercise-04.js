// Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// It does not produce an error but it logs the numbers 1, 2, 3, 4, 5 cause we are incrementing the calue of the iterator
// It does not log 0 cause we are incrementing i by 1 before loggin it
