// Logical AND (&&) operation
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17); 
// Checks if `currentTime` is greater than 9 AND less than 17. Outputs: true

// Examples of AND (&&) truth table
console.log(true && true); // Both conditions are true, outputs: true
console.log(true && false); // One condition is false, outputs: false
console.log(false && true); // One condition is false, outputs: false
console.log(false && false); // Both conditions are false, outputs: false

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Logical OR (||) operation
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17); 
// Checks if `currentTime` is less than 9 OR greater than 17. Outputs: true

// Examples of OR (||) truth table
console.log(true || true); // At least one condition is true, outputs: true
console.log(true || false); // One condition is true, outputs: true
console.log(false || true); // One condition is true, outputs: true
console.log(false || false); // Both conditions are false, outputs: false

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Logical NOT (!) operation
var petHungry = true;
console.log("Feeding the pet"); // Outputs a simple message
console.log("Pet is hungry: ", !petHungry); 
// Negates the value of `petHungry`. Outputs: false
console.log(petHungry); // Outputs the original value: true

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// String concatenation examples
console.log("inter" + "net"); // Concatenates "inter" and "net", outputs: "internet"
console.log("note" + "book"); // Concatenates "note" and "book", outputs: "notebook"
console.log(365 + " days"); // Combines number and string, outputs: "365 days"
console.log(12 + " months"); // Combines number and string, outputs: "12 months"
console.log(1 + "2"); // Combines number and string, outputs: "12"

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Summing multiple variables
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); 
// Adds all variables, outputs: 9

// Incrementing a variable using `+=`
var overtime = 1;
overtime += 2; // Adds 2 to overtime, now 3
overtime += 1; // Adds 1 to overtime, now 4
overtime += 2; // Adds 2 to overtime, now 6
overtime += 3; // Adds 3 to overtime, now 9
console.log(overtime); // Outputs: 9

// Building a string step by step
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); 
// Combines all strings, outputs: "Once upon a time..."

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Combining logical operators
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10); 
// Checks if score is greater than 0 AND less than 10. Outputs: true

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0); 
// Checks if timeRemaining is 0 OR energy is 0. Outputs: true

// Checking even or odd numbers using modulus operator
var num1 = 2;
var num2 = 5;

var test1 = num1 % 2; // Remainder of 2 ÷ 2, outputs: 0
var test2 = num2 % 2; // Remainder of 5 ÷ 2, outputs: 1

var result1 = test1 == 0; // Checks if `test1` is 0, true for even numbers
var result2 = test2 == 0; // Checks if `test2` is 0, false for odd numbers

console.log("Is", num1, "an even number?", result1); // Outputs: true
console.log("Is", num2, "an even number?", result2); // Outputs: false
