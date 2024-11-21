// Creating an object with predefined properties and their values
var assistantManager = {
  rangeTilesPerTurn: 3, // The number of tiles the assistant manager can move per turn
  socialSkills: 30, // Level of social skills
  streetSmarts: 30, // Level of street smarts
  health: 40, // Health points
  specialAbility: "young and ambitious", // A special ability descriptor
  greeting: "Let's make some money", // Greeting message
};

// Display the assistantManager object
console.log(assistantManager);

///////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////

// Defining an object with properties set directly
var house = {
  rooms: 3, // Number of rooms
  color: "brown", // Color of the house
  priceUSD: 10000, // Price of the house in USD
};

// Defining an object by assigning properties individually
var house2 = {};
house2.rooms = 4; // Assigning number of rooms
house2.color = "pink"; // Assigning color
house2.priceUSD = 12345; // Assigning price in USD

// Defining an object using bracket notation for assigning properties
var house3 = {};
house3["rooms"] = 6; // Assigning number of rooms
house3["color"] = "red"; // Assigning color
house3["priceUSD"] = 999999; // Assigning price in USD

// Displaying all the house objects
console.log(house);
console.log(house2);
console.log(house3);
