// Concatenating two arrays using the spread operator
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate both arrays into one
console.log(fruitsAndBerries); // outputs: ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

///////////////////////////////////////

const flying = { wings: 2 };
const car = { wheels: 4 };
// Merging two objects using the spread operator
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // outputs: {wings: 2, wheels: 4}

///////////////////////////////////////

let veggies = ["onion", "parsley"];
// Adding new items to an array using the spread operator
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies); // outputs: ['onion', 'parsley', 'carrot', 'beetroot']

///////////////////////////////////////

const greeting = "Hello";
// Converting a string into an array of characters using the spread operator
const arrayOfChars = [...greeting];
console.log(arrayOfChars); // outputs: ['H', 'e', 'l', 'l', 'o']

///////////////////////////////////////

const car1 = {
  speed: 200,
  color: "yellow",
};
// Copying an object using the spread operator
const car2 = { ...car1 };
car1.speed = 201; // Modifying car1's speed does not affect car2
console.log(car1.speed, car2.speed); // outputs: 201 200

///////////////////////////////////////

const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
// Modifying fruits1 does not affect fruits2 because it's a shallow copy
fruits1.pop(); // removes last item from fruits1
console.log(fruits1, "not", fruits2); // outputs: ['apples'] 'not' ['apples', 'pears']
