// Write a javascript program to check two numbers and return true
// if one of two numbers are 100 or sum of two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(10, 1));
