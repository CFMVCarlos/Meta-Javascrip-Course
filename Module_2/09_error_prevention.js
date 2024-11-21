// Function to add two numbers with error handling for invalid input
function addTwoNums(a, b) {
  try {
    // Check if the first argument is not a number
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } 
    // Check if the second argument is not a number
    else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } 
    // If both arguments are numbers, add them
    else {
      console.log(a + b);
    }
  } catch (e) {
    // Catch the error and log it
    console.log("Error!", e);
  }
}

// Calling the function with invalid input to demonstrate error handling
addTwoNums(5, "5"); // This will throw an error because "5" is a string, not a number
console.log("This still works"); // This will still be executed because the error is caught

///////////////////////////////////////
console.log();
///////////////////////////////////////

// Function to find a specific letter in a word, with validation of inputs
function letterFinder(word, match) {
  // Validate if 'word' is a string of at least 2 characters and 'match' is a single character
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  
  // If both conditions are met, check each character in the word
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        // If the current character matches the 'match' argument, print the position
        console.log("Found the", match, "at", i);
      } else {
        // If no match at the current position, print this message
        console.log("---No match found at", i);
      }
    }
  } else {
    // If input validation fails, print an error message
    console.log("Please pass correct arguments to the function");
  }
}

// Calling the function with incorrect arguments
letterFinder(5, 5); // This will output "Please pass correct arguments to the function" because the arguments are invalid
letterFinder("cat", "c"); // This will find the letter 'c' in "cat" and output its position
