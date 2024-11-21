// Create an array to store clothing items
var clothes = [];

// Add clothing items to the array
clothes.push("jacket");
clothes.push("t-shirt");
clothes.push("scarf");
clothes.push("socks");
clothes.push("shoes");

// Remove the last item from the array
clothes.pop();

// Add a new item (hat) to the array
clothes.push("hat");

// Output the third item in the array (index 2)
console.log(clothes[2]); // Outputs: "scarf"

///////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////

// Create an object to store information about a favorite car
var favCar = {};

// Add properties to the car object
favCar.color = "red";
favCar.covertible = false;

// Output the car object
console.log(favCar); // Outputs: { color: 'red', covertible: false }

///////////////////////////////////////////////////////////
console.log();
///////////////////////////////////////////////////////////

// Example of adding properties and methods to an object
var car = {};

// Add properties to the car object
car.mileage = 98765;
car.color = "red";
console.log(car); // Outputs: { mileage: 98765, color: 'red' }

// Add methods to the car object
car.turnTheKey = function() {
    console.log("The engine is running"); // Outputs when called
};
car.lightsOn = function() {
    console.log("The lights are on."); // Outputs when called
};

// Output the car object and call its methods
console.log(car); // Outputs: { mileage: 98765, color: 'red', turnTheKey: [Function], lightsOn: [Function] }
car.turnTheKey(); // Outputs: "The engine is running"
car.lightsOn(); // Outputs: "The lights are on."
