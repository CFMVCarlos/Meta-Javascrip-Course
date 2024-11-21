// Uncommenting the following line would throw an error because 'a' and 'b' are undefined
// console.log(a + b)
// console.log("This line is never reached")

// This line throws a ReferenceError explicitly to demonstrate how to handle errors
// throw new ReferenceError();

// Using a try-catch block to handle errors
try {
  // Attempt to execute code that may throw an error
  console.log(a + b); // This will throw a ReferenceError since 'a' and 'b' are not defined
} catch (error) {
  // The error is caught here, and we log the error message and a custom message
  console.log(error);  // This will log the error object
  console.log("There was an error");  // Custom message for error handling
}

// This line is outside of the try-catch block and will run regardless of the error
console.log("This line is reached");
