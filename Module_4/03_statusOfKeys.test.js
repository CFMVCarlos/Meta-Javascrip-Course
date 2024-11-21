// Import the 'statusOfKeys' function from the file 03_statusOfKeys.js
const statusOfKeys = require("./03_statusOfKeys");

// Create a spy on the console.log method to monitor its calls
const spyConsoleLog = jest.spyOn(console, "log");

// Mock the implementation of console.log to return the keys parameter directly
spyConsoleLog.mockImplementation((keys) => keys);

// Test to check if the 'statusOfKeys' function is defined
test("returns true if statusOfKeys exists", () => {
  expect(statusOfKeys).toBeDefined();
});

// Test to check if console.log is called inside the statusOfKeys function
test("test console log inside statusOfKeys", () => {
  // Call the 'statusOfKeys' function with the argument 'true'
  statusOfKeys(true);
  
  // Check that console.log was called
  expect(console.log).toHaveBeenCalled();
  
  // Check if the first argument passed to console.log is 'true'
  expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
  
  // Reset the spy on console.log after the test
  spyConsoleLog.mockReset();
  
  // Restore the original console.log method to avoid side effects on other tests
  spyConsoleLog.mockRestore();
});
