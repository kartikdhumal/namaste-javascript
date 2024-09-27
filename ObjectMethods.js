// Object - A JavaScript object is an entity having state and behavior (properties and methods). 
// For example: car, pen, bike, chair, glass, keyboard, monitor etc.
// JavaScript is an object-based language. Everything is an object in JavaScript.

// Object and Its Methods

// 1. Object.keys()

// Definition:
// Object.keys() returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

// Syntax:
// Object.keys(obj)

// - obj: The object whose enumerable property names are to be returned.

// Example:
const student = {
    id: 1,
    name: "Kartik",
    age: 22
};

console.log(Object.keys(student));
// Output: [ 'id', 'name', 'age' ]


// 2. Object.values()

// Definition:
// Object.values() returns an array of a given object's own enumerable property values, in the same order as provided by a for...in loop.

// Syntax:
// Object.values(obj)

// - obj: The object whose enumerable property values are to be returned.

// Example:
const student1 = {
    id: 1,
    name: "Kartik",
    age: 22
};

console.log(Object.values(student1));
// Output: [ 1, 'Kartik', 22 ]


// 3. Object.entries()

// Definition:
// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// Syntax:
// Object.entries(obj)

// - obj: The object whose enumerable [key, value] pairs are to be returned.

// Example:
const student2 = {
    id: 1,
    name: "Kartik",
    age: 22
};

for (let [key, value] of Object.entries(student2)) {
    console.log(`${key} is ${value}`);
}

// Output:
// id is 1
// name is Kartik
// age is 22


// 4. Object.assign()

// Definition:
// Object.assign() copies all enumerable properties from one or more source objects to a target object. It returns the target object.

// Syntax:
// Object.assign(target, ...sources)

// - target: The object to which properties are copied.
// - sources: One or more source objects from which properties are copied.

// Example:
const student3 = {
    id: 1,
    name: "Kartik",
    age: 22
};

const newObj = {
    id: 2,
    name: "Divya"
};

Object.assign(student3, newObj);
console.log(student3);
// Output: { id: 2, name: 'Divya', age: 22 }


// 5. Object.seal()

// Definition:
// Object.seal() seals an object, preventing new properties from being added and marking all existing properties as non-configurable. Existing properties can still be modified.

// Syntax:
// Object.seal(obj)

// - obj: The object to be sealed.

// Example:
const student4 = {
    id: 1,
    name: "Kartik",
    age: 22
};

Object.seal(student4);
console.log(student4.hasOwnProperty("age"));
// Output: true (since 'age' is still an existing property)


// 6. Object.freeze()

// Definition:
// Object.freeze() prevents modifications to an object. Once an object is frozen, new properties cannot be added, existing properties cannot be removed or modified, and existing property attributes cannot be changed.

// Syntax:
// Object.freeze(obj)

// - obj: The object to be frozen.

// Example:
const student5 = {
    id: 1,
    name: "Kartik",
    age: 22
};

Object.freeze(student5);

student5.age = 23;       // This will not change the property
student5.grade = "A";   // This will not add a new property

console.log(student5);  // Output: { id: 1, name: 'Kartik', age: 22 }


// 7. Object.fromEntries()

// Definition:
// Object.fromEntries() transforms a list of key-value pairs into an object.

// Syntax:
// Object.fromEntries(iterable)

// - iterable: An iterable object such as an array of [key, value] pairs.

// Example:
const entries6 = [
    ['id', 2],
    ['name', 'Divya']
];

const obj = Object.fromEntries(entries6);
console.log(obj);
// Output: { id: 2, name: 'Divya' }


// 8. Object.values() with map()

// Definition:
// Using Object.values() in combination with map() allows you to transform and operate on the values of an object.

// Example:
const student6 = {
    id: 2,
    name: "Divya",
    age: 22
};

const entries = Object.entries(student6);
const values = Object.values(Object.fromEntries(entries6));

values.map((num) => {
    console.log(num + " ");
});
// Output: 2 (number)
// Output: Divya (string)
// Output: 22 (number)

