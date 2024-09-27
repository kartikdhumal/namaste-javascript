// Higher-Order Functions in JavaScript

// A higher-order function is a function that takes one or more functions as arguments, 
// or returns a function as its result. 
// Common higher-order functions include `map`, `filter`, and `reduce`.

// Example of Higher-Order Function

function myName(title) {
    title();
    console.log(" Kartik Dhumal ");
}

function title() {
    console.log("---- My Name ----");
}

myName(title); // Output: ---- My Name ----
//          Kartik Dhumal

// In this example, `myName` is a higher-order function because it takes another function `title` as its argument.

const radius = [1, 2, 3];

// We have two functions to calculate the area and diameter of a circle.

const area = function (radius) {
    return Math.PI * radius * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

// The `calculate` function is a higher-order function. 
// It takes an array of radii and a function (logic) as arguments. 
// It then applies the logic function to each radius in the array and returns the results in an array.

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

// Using the `calculate` function to compute either the areas or diameters of circles.

console.log(calculate(radius, area));    // Output: [3.141592653589793, 12.566370614359172, 28.274333882308138]
console.log(calculate(radius, diameter)); // Output: [2, 4, 6]

// This demonstrates the flexibility and reusability of higher-order functions in JavaScript.

let arr = [12, 21, 54, 64];

// Map - 

// The `map` function creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

// When you want to transform array use can use map

function square(x) {
    return x * x;
}

const squares = arr.map((x) => square(x));
console.log(squares); // Output: [144, 441, 2916, 4096]

// Another example of map
const names = ["Alice", "Bob", "Charlie"];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); // Output: ["ALICE", "BOB", "CHARLIE"]

// Filter - 

// The `filter` function creates a new array with all elements that pass the test implemented by the
// provided function.

// Use filter when you want to select specific elements from an array based on a condition:

const evens = arr.filter(x => x % 2 == 0);
console.log(evens); // Output: [12, 54, 64]

// Another example of filter
const words = ["apple", "banana", "grape", "kiwi"];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // Output: ["apple", "banana", "grape"]

// Reduce - 

// The `reduce` function executes a reducer function (that you provide) on each element of the array,
// resulting in a single output value.
// it takes two arguments - accumulated , current value

const sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // Output: 151

// Another example of reduce
const product = arr.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 866688

// Another example of reduce to concatenate strings
const sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log(sentence); // Output: "apple banana grape kiwi"

// Summary
// - Higher-Order Functions: Functions that take other functions as arguments or return functions as results.
// - Map: Transforms each element in an array by applying a function and returns a new array.
// - Filter: Filters elements in an array based on a condition and returns a new array of elements that meet the condition.
// - Reduce: Reduces an array to a single value by applying a function to each element (e.g., summing values).
