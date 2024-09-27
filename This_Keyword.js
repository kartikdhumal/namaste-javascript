// This Keyword

// The `this` keyword refers to an object in JavaScript.
// Its value depends on how the function is called.

// In the global execution context (outside of any function), `this` refers to the global object:
// - In a web browser, the global object is `window`.
// - In Node.js, the global object is `global`.

// The value of `this` depends on in which context it appears: function, class, or global.

// When used in an object method, `this` refers to the object that the method is a property of.

const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log(test.func()); // Output: 42
// Here, `this` refers to the `test` object.

// Alone, `this` refers to the global object.
console.log(this); // Output: [object global] in Node.js or [object Window] in browsers

// In a function (non-strict mode), `this` refers to the global object.
function myFunction() {
    return this;
}
console.log(myFunction()); // Output: [object global] in Node.js or [object Window] in browsers

// In a function, in strict mode, `this` is `undefined`.
"use strict";
function myStrictFunction() {
    return this;
}
console.log(myStrictFunction()); // Output: undefined

// In an event handler, `this` refers to the element that received the event.
document.getElementById("myButton").addEventListener("click", function () {
    console.log(this); // Output: <button id="myButton">...</button>
});

// Methods like `call()`, `apply()`, and `bind()` can refer `this` to any object.

// The `bind()` method:
// The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

const person = {
    firstName: "Kartik",
    lastName: "Dhumal",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const member = {
    firstName: "Guddu",
    lastName: "Pandit",
};

let fullName = person.fullName.bind(member);
console.log(fullName()); // Output: Guddu Pandit

// The `call()` method:
// The `call()` method calls a function with a given `this` value and arguments provided individually.

function showFullName() {
    return this.firstName + " " + this.lastName;
}

console.log(showFullName.call(member)); // Output: Guddu Pandit

// The `apply()` method:
// The `apply()` method calls a function with a given `this` value and arguments provided as an array.

console.log(showFullName.apply(member)); // Output: Guddu Pandit

// Example: Using `this` inside a DOM event handler
// HTML: <button id="myButton">Click me</button>
document.getElementById("myButton").addEventListener("click", function () {
    console.log(this); // Output: <button id="myButton">...</button>
});

// How `this` works differently in strict mode:
// In strict mode, `this` inside a function is `undefined`.
function strictFunction() {
    "use strict";
    console.log(this); // Output: undefined
}
strictFunction();

// Demonstrating `this` inside an object method and changing the method context:
const obj4 = {
    name: "obj4",
    getThis() {
        return this;
    },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // Output: obj5
// Here, `this` in `getThis` refers to `obj5` because `getThis` is called as a method of `obj5`.
