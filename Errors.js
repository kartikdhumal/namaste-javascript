//  Types of Errors
// 1. SyntaxError - A SyntaxError occurs when the JavaScript engine encounters code that
//                  does not follow the correct syntax rules of the language.
// 2. ReferenceError - A ReferenceError occurs when code references a variable that does not exist.
// 3. TypeError - A TypeError occurs when an operation is performed on a value of the wrong type.
// 4. RangeError - A RangeError occurs when a value is not within the expected range.
// 5. URIError - A URIError occurs when there is an error in encoding or decoding a URI.
// 6. EvalError - An EvalError is thrown when there is an error in the global eval() function. Note that in modern JavaScript, EvalError is not commonly
//                 encountered as eval() is rarely used.


// 1. SyntaxError

// lat lat = 5;
// console.log(lat);

// console.log("Hello World"

// if (true {
//     console.log("Hello");
// }


// 2. ReferenceError

// console.log(x); // x is not defined
// // ReferenceError: x is not defined

// function greet() {
//     console.log(message); // message is not defined
//   }
//   greet();

// let a = 10;
// if (true) {
//     console.log(b); // b is not defined
// }

// 3. TypeError

// var num = 42;
// num.toUpperCase(); // num is a number, not a string
// // TypeError: num.toUpperCase is not a function

// var obj = {};
// obj.foo(); // obj.foo is not a function

// null.length; // null does not have a length property


// 4. RangeError


// function factorial(n) {
//     if (n < 0) throw new RangeError("Argument must be a non-negative number");
//     // ...
// }
// factorial(-1); // RangeError: Argument must be a non-negative number


// let arr = new Array(-1); // Invalid array length
// // RangeError: Invalid array length

// let num = 1;
// num.toExponential(101); // Precision out of range
// // RangeError: toExponential() argument must be between 0 and 100


// 5. URIError

// decodeURIComponent('%'); // URI malformed
// URIError: URI malformed

// decodeURI('%E0%A4%A'); // Incomplete URI encoding
// URIError: URI malformed

// encodeURIComponent('\uD800'); // Incomplete UTF-8 surrogate pair
// URIError: URI malformed


// 6. EvalError

// This example is forced as modern JavaScript does not throw EvalError in normal usage
// eval("foo bar"); // Unexpected identifier
// // EvalError: Unexpected identifier

// try {
//     eval("2 + 2 = 4"); // Invalid assignment
// } catch (e) {
//     console.log(e instanceof EvalError); // true
// }

// eval("var a = 'hello"); // Unterminated string constant
// // EvalError: Unterminated string constant


