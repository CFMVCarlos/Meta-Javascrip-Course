// Task 1: Function to log items from a dairy array
function logDairy() {
  // Creating an array of dairy items
  var dairy = [
    "cheese",
    "sour cream",
    "milk",
    "yogurt",
    "ice cream",
    "milkshake",
  ];

  // Looping through the dairy array and logging each item
  for (let item of dairy) {
    console.log(item);
  }
}

// Calling the logDairy function to print dairy items
logDairy();

///////////////////////////////////////////

// Task 2: Function to demonstrate creating an object using Object.create() and logging its properties
function birdCan() {
  // Animal object with canJump property
  const animal = {
    canJump: true,
  };

  // Creating a bird object that inherits from animal
  const bird = Object.create(animal);

  // Adding properties specific to the bird object
  bird.canFly = true;
  bird.hasFeathers = true;

  // Logging only the bird's own properties (using Object.keys())
  for (var property of Object.keys(bird)) {
    console.log(`${property}: ${bird[property]}`);
  }
}

// Calling the birdCan function to log bird's own properties
birdCan();

///////////////////////////////////////////

// Task 3: Function to demonstrate iteration over an object's prototype chain
function animalCan() {
  // Animal object with canJump property
  const animal = {
    canJump: true,
  };

  // Creating a bird object that inherits from animal
  const bird = Object.create(animal);

  // Adding properties specific to the bird object
  bird.canFly = true;
  bird.hasFeathers = true;

  // Logging all properties (including inherited properties using 'for-in')
  for (var property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
}

// Calling the animalCan function to log all properties, including inherited ones
animalCan();
