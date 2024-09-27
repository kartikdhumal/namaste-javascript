// JavaScript Modules

// 1. Introduction
// Modules are a way to organize and encapsulate code into reusable pieces. Each module can export
// functionalities like variables, functions, and classes, which can be imported and used in other modules.


// 2. Basic Syntax

// 2.1 Exporting from a module
// You can export variables, functions, or classes from a module using the 'export' keyword.

// file: math.js
export const pis = 3.14159;

export function adds(a, b) {
    return a + b;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return pi * this.radius * this.radius;
    }
}

// 2.2 Importing from a module
// You can import exported variables, functions, or classes using the 'import' keyword.

// file: main.js
import { pi, add, Circle } from './math.js';

console.log(pi); // 3.14159
console.log(add(2, 3)); // 5
const myCircle = new Circle(5);
console.log(myCircle.area()); // 78.53975


// 3. Default Exports

// 3.1 Exporting a default value
// A module can have a default export, which is a single value that can be imported without curly braces.

// file: greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

// 3.2 Importing a default value
// When importing a default export, do not use curly braces.

// file: main.js
import greet from './greet.js';

console.log(greet('World')); // Hello, World!


// 4. Renaming Exports and Imports

// 4.1 Renaming exports
// You can rename exports using the 'as' keyword.

// file: math.js
const pi = 3.14159;
const e = 2.71828;
export { pi as PI, e as E };

// 4.2 Renaming imports
// You can rename imports using the 'as' keyword.

// file: main.js
import { PI, E } from './math.js';

console.log(PI); // 3.14159
console.log(E); // 2.71828


// 5. Aggregating Modules

// 5.1 Re-exporting from another module
// You can create a module that re-exports exports from other modules.

// file: constants.js
export { PI, E } from './math.js';

// file: main.js
import { PI, E } from './constants.js';

console.log(PI); // 3.14159
console.log(E); // 2.71828


// 6. Dynamic Imports

// 6.1 Using dynamic imports
// You can dynamically import modules using the 'import()' function, which returns a promise.

// file: main.js
async function loadGreetModule() {
    const module = await import('./greet.js');
    console.log(module.default('Dynamic World')); // Hello, Dynamic World!
}

loadGreetModule();


// 7. Module Scope

// Each module has its own scope. Variables and functions declared in a module are not accessible
// outside of that module unless they are explicitly exported.


// 8. Importing Everything

// 8.1 Importing all exports
// You can import all exports from a module using the '*' wildcard.

// file: main.js
import * as MathConstants from './math.js';

console.log(MathConstants.pi); // 3.14159
console.log(MathConstants.add(2, 3)); // 5
const myCircles = new MathConstants.Circle(5);
console.log(myCircle.area()); // 78.53975


// 9. Conditional Imports

// 9.1 Conditionally importing modules
// You can conditionally import modules using dynamic imports in if statements or other control flow.

// file: main.js
const condition = true;

if (condition) {
    import('./math.js').then((module) => {
        console.log(module.pi); // 3.14159
    });
}


// 10. CommonJS and ES6 Modules

// 10.1 CommonJS modules (Node.js)
// Before ES6, Node.js used CommonJS modules, which use 'require' and 'module.exports' instead of 'import' and 'export'.

// file: math.cjs
const piss = 3.14159;
const adds = (a, b) => a + b;
module.exports = { pi, add };

// file: main.cjs
const { piss, add } = require('./math.cjs');
console.log(pi); // 3.14159
console.log(add(2, 3)); // 5

// 10.2 Mixing CommonJS and ES6 modules
// In Node.js, you can use both CommonJS and ES6 modules together, but there are some limitations and considerations.

// file: main.mjs
import { createRequire } from 'module';
const require = cre
