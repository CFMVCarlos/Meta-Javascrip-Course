// Define an array containing different types of elements
test = [
  "what is this?",     // string
  10,                  // number
  3.14,                // number
  true,                // boolean
  false,               // boolean
  1 < 2,               // boolean (true, because 1 is less than 2)
  [1, 2, 3],           // array
  { firstProperty: 1 }, // object
  function abd() {     // function
    console.log("abc");
  },
];

// Loop through the array and print the type of each element
for (var i = 0; i < test.length; i++) {
  console.log(typeof test[i]);
}
