// Array of fruits
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// Task 1: Use forEach with a named function to log fruit and its index
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}

// Calling forEach on the fruits array and passing the appendIndex function
fruits.forEach(appendIndex);

console.log();

// Task 2: Use forEach with an anonymous function to log fruit and its index
fruits.forEach(function (fruit, index) {
  console.log(`${index}. ${fruit}`);
});

console.log();

// Task 3: Use filter to get numbers greater than 20 from the nums array
const nums = [0, 10, 20, 30, 40, 50];
let filteredNums = nums.filter(function (num) {
  return num > 20; // Filters out numbers less than or equal to 20
});
console.log(filteredNums); // Logs [30, 40, 50]

console.log();

// Task 4: Use map to divide each number by 10 in the nums array
let mappedNums = nums.map(function (num) {
  return num / 10; // Divides each number by 10
});
console.log(mappedNums); // Logs [0, 1, 2, 3, 4, 5]

console.log();

// Task 5: Use forEach with Object.keys() to log the properties and values of the drone object
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone); // Get the keys of the drone object
droneKeys.forEach(function (key) {
  result.push(key, drone[key]); // Push key and value into the result array
});
console.log(result); // Logs ["speed", 100, "color", "yellow"]
