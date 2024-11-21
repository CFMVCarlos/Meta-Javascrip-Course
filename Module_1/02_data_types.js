/* Arithmetic Operators in JS
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division
    **  Exponentiation
    %   Modulus
    ++  Increment
    --  Decrement
*/

/* Comparison Operators in JS
    >   Greater than
    <   Less than
    >=  Greater than or equal to
    <=  Less than or equal to
    ==  Equal to (loose equality, type conversion allowed)
    !=  Not equal to (loose inequality, type conversion allowed)
    === Strict equal to (checks value and type)
    !== Strict not equal to (checks value and type)
*/

// Examples of Arithmetic Operators
console.log(2 + 2); // Addition: 2 + 2 = 4
console.log(1 + 2 + 3 + 4 + 5); // Addition: 1 + 2 + 3 + 4 + 5 = 15
console.log(20 - 10); // Subtraction: 20 - 10 = 10
console.log(2 * 3); // Multiplication: 2 * 3 = 6
console.log(8 / 1); // Division: 8 ÷ 1 = 8
console.log(9 % 8); // Modulus: 9 % 8 = 1 (remainder of 9 divided by 8)
console.log(2 ** 3); // Exponentiation: 2^3 = 8

// Examples of Comparison Operators
console.log(3 > 2); // Greater than: true, as 3 is greater than 2
console.log(2 > 3); // Greater than: false, as 2 is not greater than 3
console.log(10 == 10); // Loose equality: true, as values are the same
console.log(10 == "10"); // Loose equality: true, as '10' (string) is coerced to number 10
console.log(10 === "10"); // Strict equality: false, as types (number vs. string) are different
console.log(1 != "1"); // Loose inequality: false, as '1' (string) is coerced to number 1
console.log(1 !== "1"); // Strict inequality: true, as types (number vs. string) are different
