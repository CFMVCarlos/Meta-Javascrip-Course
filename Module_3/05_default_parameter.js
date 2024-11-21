// Function without default parameters
function noDefaultParams(number) {
  console.log("Result:", number * number);  // Logs the square of the input number
}

// Function with default parameters (default is 10)
function withDefaultParams(number = 10) {
  console.log("Result:", number * number);  // Logs the square of the input number (defaults to 10 if no input)
}

noDefaultParams(5);  // Logs: Result: 25
noDefaultParams();   // Logs: Result: NaN (because 'number' is undefined)
withDefaultParams(5);  // Logs: Result: 25
withDefaultParams();   // Logs: Result: 100 (default value of 10 is used)

// Default parameters are used when arguments are not passed to the function, but they don't work if the value is explicitly passed as undefined.

///////////////////////////////////////////
console.log();
///////////////////////////////////////////

// Class demonstrating default parameters in the constructor
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;  // Default value of 1
        this.num2 = num2;  // Default value of 2
        this.num3 = num3;  // Default value of 3
        this.string1 = string1;  // Default value of "Result:"
        this.bool1 = bool1;  // Default value of true
    }
    
    // Method to calculate the sum and log the result based on bool1's value
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);  // Logs the sum if bool1 is true
            return;
        }
        return "The value of bool1 is incorrect";  // Returns a message if bool1 is false
    }
}

var better = new WithDefaultParams();  // Creates an instance using the default parameters
better.calculate();  // Logs: Result: 6 (1 + 2 + 3)
