// Import the addFive function from the '01_addFive' file
const addFive = require('./01_addFive');

// Jest test suite: test function for the addFive function
test("returns the number plus 5", () => {
  // Expect the result of calling addFive(5) to be 10
  expect(addFive(5)).toBe(10);
});
