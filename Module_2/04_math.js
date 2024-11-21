// Generate a random decimal number between 0 and 0.99 and display it
console.log(Math.random()); // Outputs a random number between 0 and 0.99

// Save a random decimal number to a variable and display it
var decimal = Math.random(); // Stores a random number between 0 and 0.99 in "decimal"
console.log(decimal); // Outputs the value of "decimal"

// Multiply the random decimal number by 10 and display the result
console.log(decimal * 10); // Outputs a value between 0 and 9.9

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Define an array of decimal numbers to round
var rounded = [0.0001, 0.5, 0.99, 1.01, 1.5, 2.99];

// Iterate through the array and round each number to the nearest integer
for (var i = 0; i < rounded.length; i++) {
  console.log(Math.round(rounded[i])); // Outputs the rounded value of each array element
}

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Generate a random decimal number between 0 and 10
var decimal10 = Math.random() * 10; // Random decimal between 0 and 10

// Round the decimal number to the nearest integer and display it
console.log(Math.round(decimal10)); // Outputs an integer between 0 and 10
