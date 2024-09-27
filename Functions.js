// Functions

// a set of statements that performs a task or calculates a value

// Functions statments or Functions Declaration - A named function defined with the function keyword, hoisted to
//                                                the top of its scope.

function myName() {
    console.log("Pappu Kumar");
}
myName();

// Function Expression - A function expression is a way to define a function and assign it to a variable

var b = function () {
    console.log("Pappu Kumar");
}

b();

// The diffrence between functions expressions and Declaration is hoisting. We can call FUnctions statements or 
// Functions Declaration from top

// Anonymous function - The functions which do not have a name that is called as Anonymous function

var b = function () {
    console.log("Pappu Kumar");
};

// Named Functions Expression - A named function expression is a function defined within an expression 
//                              that has a name

var b = function xyz() {
    console.log("I am Named functions expressions");
}
b();

// Diffrence parameters & Arguments - Parameters are variables defined in the function signature to accept input values.
//                                    Arguments are the actual values passed to the function when it is called.

function sum(a, b) { // Parameters
    console.log(a + b);
}

sum(32, 54); // Arguments

// First class Functions - first-class functions refer to the concept that functions are treated as first-class
//                         citizens. This means that functions can be treated like any other value and can be
//                         Assigned to variables , Passed as arguments , Returned from other functions
//                         Stored in data structures like arrays or object


// const greet = function() {
//     console.log("Hello, World!");
// };
// greet(); // Output: Hello, World!



// function callFunction(fn) {
//     fn();
// }
// callFunction(greet); // Output: Hello, World!


// function createGreeter() {
//     return function() {
//         console.log("Hello from the returned function!");
//     };
// }
// const greeter = createGreeter();
// greeter(); // Output: Hello from the returned function!


// const functionsArray = [
//     function() { console.log("First function"); },
//     function() { console.log("Second function"); }
// ];
// functionsArray[0](); // Output: First function
// functionsArray[1](); // Output: Second function


// First class Citizens - If any programming language has the ability to treat functions as values, to pass them
//                        as arguments and to return a function from another function then it is said that
//                        programming language has First Class Functions

// Arrow Functions or Lambda Functions - Arrow functions are anonymous functions i.e. functions without a name
//                                       but they are often assigned to any variable. They are also called Lambda
//                                       Functions.

// const sayName = () => {
//     console.log("Pappu Kumar");
// }

// LIMITATIONS OF ARROW FUNCTIONS

// Arrow functions do not have the prototype property.
// Arrow function do not have their own this
// Arrow functions cannot be used with the new keyword.
// Arrow functions cannot be used as constructors.
// These functions are anonymous and it is hard to debug the code.
// Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.


// Differences Between Normal Function and Arrow Function

// ASPECT                 ARROW fUNCTIONS             NORMAL FUNCTION
// Anonymous              Yes                         No
// Syntax                 Shorter                     Longer
// Handling multiple      Difficult                   Better
// expressions
// "this" keyword         Inherits from a broader     Refers to the object it belongs to ("this") or undefined (in strict mode).
// behavior               scope.
// Constructor            Not suitable for use as a   Suitable for use as a constructor.
// functionality          constructor.
// Arguments object       Does not have an arguments  Has an arguments object.
//                        object.
// Duplicate named        Not allowed                 Allowed
// parameters
// Call, apply, and bind  Do not change the value     Can change the value of 'this'.
//                        of 'this'.
// Lexical scoping        Lexically scoped            Functionally scoped. Lexical scoping means that 'this' inside an arrow
//                                                    function refers to the value of 'this' in the enclosing lexical context,
//                                                    while in normal functions, 'this' is dynamically determined by how the
//                                                    function is called.
