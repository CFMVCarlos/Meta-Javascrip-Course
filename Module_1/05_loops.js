// Sequential logging of numbers followed by "Go!"
console.log("1");
console.log("2");
console.log("3");
console.log("Go!");

console.log();

// Using a for loop to achieve the same output
for (var i = 1; i < 4; i++) {
  console.log(i); // Outputs numbers 1, 2, and 3
}
console.log("Go!");

console.log();

// Using a while loop to count down and print "Happy New Year!"
var counter = 3;
while (counter > 0) {
  console.log(counter); // Outputs 3, 2, 1
  counter--; // Decrements the counter
}
console.log("Happy New Year!");

console.log();

// Nested loops to iterate through years and months
for (var year = 2023; year < 2025; year++) {
  console.log(year); // Outputs 2023, 2024
  for (var month = 6; month < 9; month++) {
    console.log("    " + month); // Outputs months 6, 7, 8 indented
  }
}

console.log();

// Nested loops to perform division operations
for (var i = 100; i > 10; i = i - 10) { // Outer loop: i decreases by 10
  for (var j = 10; j > 4; j = j - 5) {  // Inner loop: j decreases by 5
    console.log(i + " divided by " + j + " equals " + i / j);
    // Outputs division results, e.g., "100 divided by 10 equals 10"
  }
}

console.log();

// Multiplication table using nested loops
for (var i = 0; i < 10; i++) { // Outer loop: iterates over rows
  for (var j = 0; j < 10; j++) { // Inner loop: iterates over columns
    console.log(
      i + 1 + " multiplied by " + (j + 1) + " equals " + (i + 1) * (j + 1)
    );
    // Outputs multiplication results, e.g., "1 multiplied by 1 equals 1"
  }
}
