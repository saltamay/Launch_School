/**
 * What does the following code log to the console?
 * 
 * */

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// it does not log any value. It will probably log undefined in the developer console or Node REPL