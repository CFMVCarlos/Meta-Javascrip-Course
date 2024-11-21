// Create a new Map instance
new Map();

// Task 1: Create a Map with boxer rankings
let bestBoxers = new Map();
// Setting key-value pairs in the Map
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
// Log the Map to the console
console.log(bestBoxers);

/////////////////////////////
console.log();
/////////////////////////////

// Create a new Set instance
new Set();

// Task 2: Create a Set to remove duplicate values from an array
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
// Pass the array to the Set to remove duplicates
const uniqueFruits = new Set(repetitiveFruits);
// Log the Set (which contains unique values) to the console
console.log(uniqueFruits);
