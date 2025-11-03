// Write a javascript program to check two numbers and return true
// if one of two numbers are 100 or sum of two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(10, 1));

const name = "firoz akhter";

// slice means kat ke nikalna
console.log(name.slice(0, 5));

// write a javascript program to get the extension of a file name

// index.html
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));

console.log("created a new branch");
