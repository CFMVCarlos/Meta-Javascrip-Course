// Function to add two predefined numbers and print the sum
function addTwoNums() {
  var a = 10; // First number
  var b = 20; // Second number
  var sum = a + b; // Calculate sum of a and b
  console.log(sum); // Print the result
}

// Function to add two numbers passed as arguments and print the sum
function addTwoNums2(a, b) {
  var sum = a + b; // Calculate sum of the arguments a and b
  console.log(sum); // Print the result
}

// Call the first function (uses predefined numbers)
addTwoNums();
// Call the second function (passes 10 and 20 as arguments)
addTwoNums2(10, 20);

/////////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////////

// Function to iterate over an array and print each element
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Display the array item at index i
  }
}

// Function to iterate over an array, print special text for "red", and modify index display
function listArrayItems2(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      console.log(i * 100, "tomato!"); // Special case for "red"
    } else {
      console.log(i * 100, arr[i]); // Display index (scaled by 100) and the item
    }
  }
}

// Array of colors
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors); // Display all items in the array
listArrayItems2(colors); // Display all items with special case for "red"

/////////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////////

// Function to find occurrences of a character in a word
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i); // Log the index when a match is found
    } else {
      console.log('---No match found at', i); // Log when no match is found at index i
    }
  }
}

// Call the letterFinder function to search for 't' in "test"
letterFinder("test", "t");
