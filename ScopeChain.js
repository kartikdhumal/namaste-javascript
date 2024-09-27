// Scope Chain

// In JavaScript, the scope chain determines the accessibility of variables and functions within a particular context.

// Example Code:

// Logging the value of variable 'a'
console.log(a);

// Defining a function named 'sum'
function sum(){
    // Within the function 'sum', logging the sum of variables 'a' and 'b'
    console.log(a + b);
}

// Declaring variables 'a' and 'b' and assigning them values
var a = 10;
var b = 20;

// Calling the function 'sum'
sum();

// Explanation:

// 1. Variable Declaration and Initialization:
// - Variables 'a' and 'b' are declared using the 'var' keyword and initialized with values.
// - 'a' is assigned the value 10, and 'b' is assigned the value 20.

// 2. Function Declaration:
// - The function 'sum' is declared using the function declaration syntax.
// - Within the function body, the sum of variables 'a' and 'b' is logged to the console.

// 3. Logging 'a':
// - Before the function 'sum' is called, the value of variable 'a' is logged to the console.
// - At this point, 'a' has been declared but not yet initialized with a value, so it logs 'undefined'.

// 4. Function Call:
// - The function 'sum' is called.
// - Within the function, the sum of 'a' and 'b' is computed and logged to the console.
// - Since 'a' is now initialized with the value 10 and 'b' with the value 20, the sum is 30.

// Result:
// - The output of the code will be:
//   undefined
//   30

// Conclusion:
// - JavaScript's hoisting mechanism allows functions and variable declarations to be hoisted to the top of their containing scope.
// - Even though 'a' is logged before its declaration and initialization, it doesn't cause an error due to hoisting.
// - However, it logs 'undefined' since it's accessed before it's assigned a value.
// - The function 'sum' can access both 'a' and 'b' even though they are declared after the function since they are hoisted to the top of the scope.
