// Define a string of letters
var letters = "abc";

// Loop through the string and print each character
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]); // Outputs each character ('a', 'b', 'c')
}

/////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////

// Define two strings to greet the user
var greet = "Hello";
var user = "Lisa";

// Attempting to use pop() on a string will cause an error because pop is not a method for strings
// console.log(greet.pop()); // Error: greet.pop is not a function of strings

// Concatenate strings using both the + operator and the concat() method
console.log(greet + " " + user); // Outputs: "Hello Lisa"
console.log(greet.concat(" ", user)); // Outputs: "Hello Lisa"
