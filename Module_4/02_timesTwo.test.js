// Import the timesTwo function from the module where it's defined
const timesTwo = require("./02_timesTwo");

// Write the first test
// The `test` function is used to define a unit test in Jest
test("returns the value multiplied by 2", () => {
  // Each `expect` function checks if the result of `timesTwo` is as expected
  expect(timesTwo(2)).toBe(4);   // Test if 2 * 2 equals 4
  expect(timesTwo(5)).toBe(10);  // Test if 5 * 2 equals 10
  expect(timesTwo(10)).toBe(20); // Test if 10 * 2 equals 20
});
