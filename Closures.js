// Closures 

// A closure is the combination of a function bundled together (enclosed) with references to
// its surrounding state (the lexical environment). 

// In other words, a closure gives you access to an outer function's scope from an inner function. 

// In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// Scoping with let and const

if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);

// if (Math.random() > 0.5) {
//     let x = 1; 
// } else {
//     let x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

// if (Math.random() > 0.5) {
//     const x = 1;
// } else {
//     const x = 2;
// }
// console.log(x);


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  

