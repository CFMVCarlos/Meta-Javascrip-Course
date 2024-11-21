// Example 1: Currency Conversion
var currencyOne = 100; // The amount in currency one
var currencyTwo = 0; // The amount in currency two, initially set to 0
var exchangeRate = 1.2; // The exchange rate from currencyOne to currencyTwo

// Function to convert currency
function convertCurrency(amount, rate) {
  return amount * rate; // Returns the converted amount
}

// Converting currency and assigning it to currencyTwo
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo); // Output the converted amount

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Example 2: Distance Calculation
function getDistance(mph, h) {
  return mph * h; // Calculates distance by multiplying miles per hour by time
}

var mph = 60; // Speed in miles per hour
var h = 2; // Time in hours
var distance = getDistance(mph, h); // Calculate distance

console.log(distance); // Output the calculated distance (120 miles)

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Example 3: Virtual Pet Object
var virtualPet = {
  sleepy: true, // Pet starts as sleepy
  nap: function () { // Method to make the pet take a nap
    this.sleepy = false; // After the nap, the pet is no longer sleepy
  },
};

console.log(virtualPet.sleepy); // Output the current sleepy state (true)
virtualPet.nap(); // Call the nap method
console.log(virtualPet.sleepy); // Output the updated sleepy state (false)

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Example 4: Function Assignment and Random Number Generation
function addTwoNums(a, b) {
  console.log(a + b); // Outputs the sum of a and b
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1); // Generates a random number between 1 and 10
}

function specificNum() {
  return 42; // Always returns the number 42
}

var useRandom = true; // A flag to decide whether to use a random number or a specific number

var getNumber;

// Deciding which function to use based on the flag
if (useRandom) {
  getNumber = randomNum; // If true, use the randomNum function
} else {
  getNumber = specificNum; // Otherwise, use the specificNum function
}

// Using the assigned function to add two numbers
addTwoNums(getNumber(), getNumber()); // Calls getNumber() twice and adds the results

////////////////////////////////////////////
console.log();
////////////////////////////////////////////

// Example 5: Passing Functions as Arguments
function addTwoNums2(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2()); // Calls both functions and adds their results
}

// Calling addTwoNums2 with two specific functions
addTwoNums2(specificNum, specificNum); // 42 + 42 = 84

// Calling addTwoNums2 with one specific function and one random function
addTwoNums2(specificNum, randomNum); // 42 + a random number (1-10)
