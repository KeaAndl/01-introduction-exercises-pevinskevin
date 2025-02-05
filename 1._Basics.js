// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is", firstName, " and my last name is", lastName)

// Better solution
const introduction = `My first name is ${firstName}, and my last name is ${lastName}`;
console.log(introduction);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

console.log(year, increment);
console.log(Number(year) + increment);
console.log(parseInt(year) + increment);
console.log(+year + increment);

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line


// --------------------------------------
