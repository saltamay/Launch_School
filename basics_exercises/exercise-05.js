// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// JavaScript engine evaluates the second opperand as String (coerced to a String) 
// since we are performing String concatination with + operator