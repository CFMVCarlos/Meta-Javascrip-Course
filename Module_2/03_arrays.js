// Create an empty array named "fruits"
var fruits = [];

// Add elements to the "fruits" array using push
fruits.push("apple"); // Adds "apple" to the array, resulting in ["apple"]
fruits.push("pear"); // Adds "pear" to the array, resulting in ["apple", "pear"]

// Display the current contents of the "fruits" array
console.log(fruits); // Output: ["apple", "pear"]

// Remove the last element of the "fruits" array using pop
fruits.pop(); // Removes "pear", resulting in ["apple"]

// Display the updated contents of the "fruits" array
console.log(fruits); // Output: ["apple"]

////////////////////////////////////////////////////////////
console.log();	
////////////////////////////////////////////////////////////

// Define a function that builds an array from three inputs
function arrayBuilder(one, two, three) {
  var arr = []; // Initialize an empty array
  arr.push(one); // Add the first input to the array
  arr.push(two); // Add the second input to the array
  arr.push(three); // Add the third input to the array
  return arr; // Return the constructed array
}

// Call the arrayBuilder function with three arguments
var simpleArr = arrayBuilder('apple', 'pear', 'plum'); // Creates ["apple", "pear", "plum"]

// Display the constructed array
console.log(simpleArr); // Output: ["apple", "pear", "plum"]
