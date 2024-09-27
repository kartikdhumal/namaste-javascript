// Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.
// However, it's important to understand how different types of declarations are hoisted.

// Variables declared with 'var' are hoisted and initialized with 'undefined'.
// Variables declared with 'let' and 'const' are hoisted but not initialized.
// Functions declared using function declarations are hoisted and can be called before their declaration.
// Function expressions and arrow functions assigned to variables are not hoisted as functions; the variables 
// are hoisted but not initialized.

console.log(a); // let - ReferenceError: Cannot access 'a' before initialization
console.log(b); // var - Undefined
console.log(c); // const - ReferenceError: Cannot access 'c' before initialization
myName(); // Pappu Kumar 
console.log(myCity); // Undefined

let a = 10;    // 'let' variables are hoisted but not initialized, causing a ReferenceError if accessed before this line
var b = 10;    // 'var' variables are hoisted and initialized with 'undefined', so no error, but 'b' would be undefined before this line
const c = 10;  // 'const' variables are hoisted but not initialized, causing a ReferenceError if accessed before this line

function myName() {
    console.log("Pappu Kumar"); // Function declarations are hoisted, so 'myName' can be called before this line
}

var myCity = () => {
    console.log("Mirzapur"); // Function expressions are not hoisted as functions; only the variable 'myCity' is hoisted and initialized with 'undefined'
}
