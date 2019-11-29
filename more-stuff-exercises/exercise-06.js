/**
 * Write a function that searches an array of strings for every element that matches the regular expression given by its argument. 
 * The function should return all matching elements in an array.
 */

function regExMatch(words, regex) {

  return words.filter(word => {
    return word.match(regex);
  })
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(regExMatch(words, /lab/));