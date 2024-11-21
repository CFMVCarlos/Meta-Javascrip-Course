// Named export for informal greeting function
export const informalGreeting = (person) => {
  console.log(`Hello, ${person}!`); // Logs a casual greeting to the person
};

// Named export for formal greeting function
export const formalGreeting = (person) => {
  console.log(`Good day, ${person}.`); // Logs a more formal greeting to the person
};

// A function to give a general greeting
const greeting = () => {
  console.log("Howdy!"); // Logs a casual 'Howdy!' message
};

// Default export for the greeting function, which can be imported without using braces
export default greeting;
