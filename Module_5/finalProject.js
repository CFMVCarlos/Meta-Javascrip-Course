// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let dish of dishData) {
    let finalPrice;
    if (taxBoolean === true) {
      finalPrice = dish.price * tax; // Apply tax
    } else if (taxBoolean === false) {
      finalPrice = dish.price; // No tax applied
    } else {
      console.log("You need to pass a boolean to the getPrices call!"); // Error handling if taxBoolean is invalid
      return;
    }
    console.log("Dish:", dish.name, "Price: $", finalPrice.toFixed(2)); // Display the dish name and price
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean); // Call getPrices to show dish prices
  
  if (typeof guests === "number" && guests > 0 && guests < 30) { // Validate guests input
    let discount = 0;
    if (guests < 5) {
      discount = 5; // Apply $5 discount for fewer than 5 guests
    } else {
      discount = 10; // Apply $10 discount for 5 or more guests
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30"); // Error handling for invalid guests input
  }
}

// Call getDiscount() with different arguments
getDiscount(true, 2); // Applying tax, fewer than 5 guests, should get a $5 discount
console.log();
getDiscount(false, 10); // No tax, 10 guests, should get a $10 discount
console.log();
getDiscount("about", "three"); // Invalid arguments, should display error messages
console.log();
