// ES6 

// JavaScript ES6 (also known as ECMAScript2015 or ECMAScript6) is the sixth edition of JavaScript
// introduced in June 2015.

// ECMAScript (European Computer Manufacturers Association Script) is the standard specification
// of JavaScript to ensure compatibility in all browsers and environments.

// List of actresses to use in examples
const actresses = ["Emma Watson", "Scarlett Johansson", "Jennifer Lawrence", "Margot Robbie", "Gal Gadot"];

// 1. let and const
// `let` and `const` are block-scoped variables.

let actress = "Emma Watson";
const MOVIE = "Beauty and the Beast";
actress = "Scarlett Johansson"; // Valid
// MOVIE = "Avengers"; // Error: Assignment to constant variable

// 2. Template Literals
// Template literals allow embedded expressions and multi-line strings.

let message = `Hello, ${actress}! Welcome to the set of ${MOVIE}.`;
console.log(message);

// 3. Arrow Functions
// Arrow functions provide a concise syntax for writing functions.

const getActressNames = () => actresses.join(", ");
console.log(getActressNames());

// 4. Default Parameters
// Default function parameters allow named parameters to be initialized with default values if no value is passed.

function greetActress(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetActress());
console.log(greetActress(actresses[0]));

// 5. Rest and Spread Operators
// rest operator collects multiple elements into an array, 
// spread operator spreads an array into individual elements.

function listActresses(...names) { // rest operator
    return names.join(", ");
}
console.log(listActresses(...actresses)); // spread operator

// 6. Destructuring
// Destructuring allows extracting values from arrays or objects into distinct variables.

const [first, second, ...others] = actresses;
console.log(first, second, others);

const actressDetails = { name: "Emma Watson", movie: "Harry Potter", age: 30 };
const { name, movie, age } = actressDetails;
console.log(name, movie, age);

// 7. Enhanced Object Literals
// ES6 provides a concise syntax for defining object literals.

const actressInfo = {
    name,
    movie,
    age,
    getDetails() {
        return `${this.name}, known for ${this.movie}, is ${this.age} years old.`;
    }
};
console.log(actressInfo.getDetails());

// 8. Classes
// ES6 classes provide a clearer syntax for creating objects and dealing with inheritance.

class Actress {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie;
    }
    getBio() {
        return `${this.name} starred in ${this.movie}.`;
    }
}
const emma = new Actress("Emma Watson", "Beauty and the Beast");
console.log(emma.getBio());

// 9. Inheritance
// Classes can extend other classes to inherit properties and methods.

class FamousActress extends Actress {
    constructor(name, movie, award) {
        super(name, movie);
        this.award = award;
    }
    getFullBio() {
        return `${this.name} starred in ${this.movie} and won ${this.award}.`;
    }
}
const scarlett = new FamousActress("Scarlett Johansson", "Black Widow", "BAFTA");
console.log(scarlett.getFullBio());

// 10. Modules
// ES6 modules allow the import and export of functionalities between different JavaScript files.

// Example: Exporting functions from another file (suppose we have a file named 'actressModule.js')
// export function getActressByName(name) {
//     return actresses.find(actress => actress === name);
// }

// Importing functions (in the current file)
// import { getActressByName } from './actressModule.js';
// console.log(getActressByName("Emma Watson"));

// 11. Promises
// Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

const fetchActressDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Details fetched successfully.");
    }, 2000);
});

fetchActressDetails.then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
});

// 12. Async/Await
// Async/await is a syntactic sugar over promises, making asynchronous code look more like synchronous code.

async function getDetails() {
    try {
        const message = await fetchActressDetails;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
getDetails();

// 13. Map, Set, WeakMap, WeakSet
// ES6 introduces new collection types: Map, Set, WeakMap, and WeakSet.

const actressMap = new Map();
actressMap.set("Emma Watson", "Beauty and the Beast");
actressMap.set("Scarlett Johansson", "Black Widow");
console.log(actressMap.get("Emma Watson"));

const actressSet = new Set(actresses);
actressSet.add("Emma Watson"); // Duplicate, won't be added
console.log(actressSet);

const weakActressMap = new WeakMap();
let obj = { name: "Jennifer Lawrence" };
weakActressMap.set(obj, "Hunger Games");
obj = null; // The entry will be garbage collected

const weakActressSet = new WeakSet();
let obj2 = { name: "Margot Robbie" };
weakActressSet.add(obj2);
obj2 = null; // The entry will be garbage collected

// 14. Symbols
// Symbols are unique and immutable data types used to create unique identifiers for object properties.

const sym = Symbol("unique");
const actressSymbolObj = {
    [sym]: "Special Actress",
    name: "Gal Gadot"
};
console.log(actressSymbolObj[sym]);

// 15. Iterators and Generators
// Iterators are objects that enable us to traverse through a collection. Generators are functions
// that can be paused and resumed.

function* actressGenerator() {
    yield "Emma Watson";
    yield "Scarlett Johansson";
    yield "Jennifer Lawrence";
}
const gen = actressGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 16. for...of Loop
// The for...of loop provides a simpler way to iterate over iterable objects (like arrays).

for (const actress of actresses) {
    console.log(actress);
}

// 17. ES6 Features Summary
// ES6 introduced many new features that enhance the readability, structure, and functionality of JavaScript code.
// Some additional features include: block-scoped functions, new methods in Math, Number, String, and Array, and new built-in methods for working with objects.

