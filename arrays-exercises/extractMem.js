// Write some code to extract the word 'mem' from the following nested array:

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

function logMem(arr) {
  arr.forEach(outerArr => {
    if (Array.isArray(outerArr)) {
      outerArr.forEach(innerEl => {
        if (innerEl === 'mem') {
          console.log(innerEl);
        }
      })
    }
  });
}

logMem(arr);

