// Example of a simple if-else statement
var result = 50;

if (result > 40) { 
  console.log("You passed the test!"); 
  // Executes if `result` is greater than 40
} else {
  console.log("You failed the test!"); 
  // Executes if `result` is not greater than 40
}

/////////////////////////////

// Example of if-else-if ladder
var place = "first";

if (place === "first") {
  console.log("You won the gold medal!");
  // Executes if `place` is exactly "first"
} else if (place === "second") {
  console.log("You won the silver medal!");
  // Executes if `place` is exactly "second"
} else if (place === "third") {
  console.log("You won the bronze medal!");
  // Executes if `place` is exactly "third"
} else {
  console.log("No medal for you!");
  // Executes if none of the above conditions are met
}

// Equivalent code using switch-case
switch (place) {
  case "first":
    console.log("You won the gold medal!");
    break; // Exits the switch block after this case
  case "second":
    console.log("You won the silver medal!");
    break;
  case "third":
    console.log("You won the bronze medal!");
    break;
  default:
    console.log("No medal for you!");
    // Executes if no case matches
}

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Traffic light example using if-else
var light = "green";

if (light == "green") {
  console.log("Drive");
  // Executes if `light` is "green"
} else if (light == "orange") {
  console.log("Get ready");
  // Executes if `light` is "orange"
} else if (light == "red") {
  console.log("Don't drive");
  // Executes if `light` is "red"
} else {
  console.log("The light is not green, orange, or red");
  // Executes if none of the conditions match
}

// Equivalent code using switch-case
switch (light) {
  case "green":
    console.log("Drive");
    break;
  case "orange":
    console.log("Get ready");
    break;
  case "red":
    console.log("Don't drive");
    break;
  default:
    console.log("The light is not green, orange, or red");
    break; // Optional here as it's the last block
}

/////////////////////////////
console.log(); // Blank line for readability
/////////////////////////////

// Example of if-else ladder based on age
var age = 18;

if (age >= 65) {
  console.log("You get your income from your pension");
  // Executes if age is 65 or older
} else if (age >= 18) {
  console.log("Each month you get a salary");
  // Executes if age is between 18 and 64
} else if (age >= 0) {
  console.log("You get an allowance");
  // Executes if age is between 0 and 17
} else {
  console.log("The value of the age variable is not numerical");
  // Executes if age is a negative number or invalid
}

// Example of switch-case for days of the week
var day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
    console.log("Saturday");
    break;
  case "Sunday":
    console.log("Sunday");
    break;
  default:
    console.log("There is no such day");
    // Executes if `day` does not match any case
}
