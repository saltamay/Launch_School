/**
 * Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
 * 1. thousands place is 4
 * 2. hundreds place is 9
 * 3. tens place is 3
 * 4. ones place is 6
 */

console.log('Thousands place is: ' + Math.floor(4936 / 1000));
console.log('Hundreds place is: ' + Math.floor((4936 % 1000) / 100));
console.log('Tens place is: ' + Math.floor((4936 % 100) / 10));
console.log('Ones place is: ' + Math.floor((4936 % 10) / 1));