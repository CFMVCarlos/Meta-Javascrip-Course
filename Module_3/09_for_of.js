// Iterating over an array using a for-of loop
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color); // Logs each color in the colors array: red, orange, yellow
}

///////////////////////////////////////////
console.log();
///////////////////////////////////////////

// Iterating over the keys of an object using Object.keys() and a for-of loop
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]); // Logs each key-value pair in the clothingItem object
}

///////////////////////////////////////////
console.log();
///////////////////////////////////////////

// Example demonstrating the difference between for-in and for-of loops with prototype chain
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
};
let superCar = Object.create(car); // Creates a new object superCar that inherits from car
superCar.speed = 200; // Adds a new property to superCar

// The for-in loop iterates over both the own properties and the prototype chain of the object.
for (let key in superCar) {
  console.log("👎", key, ":", superCar[key]); // Logs both own and inherited properties (make, model, year, speed)
}

// The for-of loop iterates only over the own properties of the object (not the prototype chain).
for (let key of Object.keys(superCar)) {
  console.log("👍", key, ":", superCar[key]); // Logs only the own properties of superCar (speed)
}
