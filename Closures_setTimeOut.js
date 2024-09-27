// Interview Question print 1 to 5 after every 1 to 5 second using closure..\

// When using var, the issue arises because var has function scope, not block scope.
// This means the variable x is shared across all iterations of the loop, leading to all
// setTimeout callbacks referring to the final value of x after the loop completes.
// It will print 6 6 6 6 6

// function printNumber() {
//     for (var x = 1; x <= 5; x++) {
//         setTimeout(() => {
//             console.log(x);
//         }, x * 1000);
//     }
// }

// printNumber();


// Using let solves the issue because let has block scope, creating a new binding for each iteration of the loop.

// function printNumber() {
//     for (let x = 1; x <= 5; x++) {
//         setTimeout(() => {
//             console.log(x);
//         }, x * 1000);
//     }
// }

// printNumber();

// To achieve the correct behavior using var, you can create a new scope for each iteration by using an
// immediately invoked function expression (IIFE) or a nested function.
// This ensures each setTimeout callback gets its own copy of x.

// function printNumber() {
//     for (var x = 1; x <= 5; x++) {
//         function printOneToFive(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000);
//         }
//         printOneToFive(x);
//     }
// }

// printNumber();