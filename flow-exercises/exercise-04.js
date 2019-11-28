// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/**
 * Logs:
 * Product2
 * Product3
 * Product not found!
 *
 * The reason is that there is no break statement within the case statements;
 * case '113' evaluates through and then the operation falls through until it reaches the end
 */