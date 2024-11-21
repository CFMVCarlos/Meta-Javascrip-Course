// var allows to use the variable before it is declared and allows to re-declare the variable
console.log(userVar);  // Output: undefined (due to hoisting)
var userVar;  // Variable declaration

var userVar = "Mary";  // First assignment
var userVar = "Joanna";  // Redeclaring and re-assigning the variable
var userVar = "Anna";  // Redeclaring and re-assigning again
console.log(userVar);  // Output: "Anna" (final value after all re-assignments)

////////////////////////////////////////////
console.log();  // Empty line to separate sections
////////////////////////////////////////////

// let allows to use the variable only after it is declared and does not allow to re-declare the variable

// console.log(user3); // ReferenceError: Cannot access before initialization (uncommenting would show error)
let userLet;  // Variable declaration
console.log(userLet);  // Output: undefined (due to hoisting but not initialized yet)

userLet = "Joanna";  // First assignment

// let userLet = "Mary"; // SyntaxError: Identifier 'userLet' has already been declared (uncommenting would show error)
userLet = "Anna";  // Re-assigning the value
console.log(userLet);  // Output: "Anna" (final assigned value)

////////////////////////////////////////////
console.log();  // Empty line to separate sections
////////////////////////////////////////////

// const allows to use the variable only after it is declared and does not allow to re-declare the variable
// const also does not allow to re-assign the value
const userConst = "Mary";  // Constant assignment (initial value)

console.log(userConst);  // Output: "Mary" (constant value)

// const userConst = "Joanna"; // SyntaxError: Identifier 'userConst' has already been declared (uncommenting would show error)
// userConst = "Anna"; // TypeError: Assignment to constant variable (uncommenting would show error)
