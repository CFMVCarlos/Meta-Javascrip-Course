// Parsing a JSON string to create a plain JavaScript object
const jsonStr = '{"greeting":"hello"}';
// JSON.parse() converts a JSON string into a JavaScript object
const aPlainObj = JSON.parse(jsonStr);
// Modifying the property of the parsed object
aPlainObj.greeting = "hi";
// Output the updated object to the console
console.log(aPlainObj); // outputs: { greeting: 'hi' }

///////////////////////////////////////

// Creating a plain JavaScript object
const data = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: false,
  hobbies: ["reading", "travelling"],
};
// Converting the JavaScript object into a JSON string
const aJsonStr = JSON.stringify(data);
// Output the JSON string to the console
console.log(aJsonStr);
// outputs: '{"firstName":"John","lastName":"Doe","age":25,"isStudent":false,"hobbies":["reading","travelling"]}'
