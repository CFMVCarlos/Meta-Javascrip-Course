// Logs "Hello World" to the console
console.log("Hello World");

// Logs "Hello, World" to the console with custom styling (blue text, 40px font size)
console.log("%cHello, World", "color: blue; font-size: 40px");

// Logs concatenated strings "Hello there, World" to the console
console.log("Hello " + "there, " + "World");

console.log(); // Adds a blank line in the console for better readability

// Declaring a variable `person` without assigning a value
var person;

// Assigning the value "John" to `person`
person = "John";
// Logs "Hello John" using a variable
console.log("Hello", person);

// Declaring a variable `greeting` and assigning the value "Hello"
var greeting = "Hello";
// Logs "Hello John" using two variables
console.log(greeting, person);

// Reassigning new values to the variables `person` and `greeting`
person = "Jane";
greeting = "Hi";
// Logs "Hi Jane" with the updated values of the variables
console.log(greeting, person);

console.log(); // Adds another blank line for readability

// Declaring and assigning names to two pet variables
var petDog = "Rex";
var petCat = "Pepper";

// Logs the names of the pets
console.log(petDog); // Outputs: Rex
console.log(petCat); // Outputs: Pepper

// Logs a sentence describing the dog's name
console.log("My pet dog's name is:", petDog);
// Logs a sentence describing the cat's name
console.log("My pet cat's name is:", petCat);

// Declaring and assigning sounds to the pets
var catSound = "purr";
var dogSound = "woof";

// Logs the dog's name and the sound it makes
console.log(petDog, "says", dogSound);
// Logs the cat's name and the sound it makes
console.log(petCat, "says", catSound);

// Updating the cat's sound to "meow"
catSound = "meow";
// Logs the updated sound of the cat
console.log(petCat, "now says", catSound);
