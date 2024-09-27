// Variable


// let
// Block-scoped.
// Not hoisted to the top of the block.
// Can be reassigned.

// const
// Block-scoped.
// Not hoisted.
// Cannot be reassigned after its initial assignment.

// var
// Function-scoped.
// Hoisted to the top of its function scope.
// Can be reassigned.

// ** Block Scope (let and const)

// function blockScopeExample() {
//     if (true) {
//         let blockScopedVar = 'I am block scoped';
//         const anotherBlockScopedVar = 'I am also block scoped';
//         console.log(blockScopedVar); // Output: 'I am block scoped'
//         console.log(anotherBlockScopedVar); // Output: 'I am also block scoped'
//     }
//     // Trying to access the block-scoped variables outside their block
//     console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
//     console.log(anotherBlockScopedVar); // ReferenceError: anotherBlockScopedVar is not defined
// }

// blockScopeExample();

// Function Scope (var)

// function functionScopeExample() {
//     if (true) {
//         var functionScopedVar = 'I am function scoped';
//         console.log(functionScopedVar); // Output: 'I am function scoped'
//     }
//     // Accessing the function-scoped variable outside the block
//     console.log(functionScopedVar); // Output: 'I am function scoped'
// }

// functionScopeExample();

