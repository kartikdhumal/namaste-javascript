/*
  OOP Concepts Documentation
*/

// Introduction to OOP
// Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects",
// which can contain data and code: data in the form of fields (often known as properties or attributes), 
// and code in the form of procedures (often known as methods).

/*
  1. Classes and Objects
*/
// Classes are blueprints for creating objects. Objects are instances of classes.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object (instance of Person)
let person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

/*
  2. Encapsulation
*/
// Encapsulation is the bundling of data with the methods that operate on that data. 
// It restricts direct access to some of the object's components.

class EncapsulatedPerson {
    constructor(name, age) {
        this._name = name; // Convention to indicate private variable
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Name cannot be empty');
        }
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log('Age must be a positive number');
        }
    }
}

let person2 = new EncapsulatedPerson('Bob', 25);
console.log(person2.name); // Output: Bob
person2.age = 26;
console.log(person2.age); // Output: 26

/*
  3. Inheritance
*/
// Inheritance is a mechanism where one class inherits the properties and methods of another class.

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the parent class
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

let employee1 = new Employee('Charlie', 28, 'Software Developer');
employee1.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
employee1.work();  // Output: Charlie is working as a Software Developer.

/*
  4. Polymorphism
*/
// Polymorphism is the ability to present the same interface for differing underlying data types.

class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}

let shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
// Output:
// Drawing a shape
// Drawing a circle
// Drawing a square

/*
  5. Abstraction
*/
// Abstraction means hiding the complex implementation details and showing only the essential 
// features of the object.

class AbstractPerson {
    constructor(name, age) {
        if (this.constructor === AbstractPerson) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
        this.age = age;
    }

    // Abstract method (should be implemented by subclass)
    greet() {
        throw new Error("Abstract method has no implementation");
    }
}

class ConcretePerson extends AbstractPerson {
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person3 = new ConcretePerson('David', 40);
person3.greet(); // Output: Hello, my name is David and I am 40 years old.

/*
  6. Composition
*/
// Composition is a design principle where a class is composed of one or more objects from 
// other classes to achieve complex functionality.

class Engine {
    start() {
        console.log('Engine started');
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        this.engine.start();
        console.log('Car started');
    }
}

let myEngine = new Engine();
let myCar = new Car(myEngine);
myCar.start();
// Output:
// Engine started
// Car started

/*
  7. Aggregation
*/
// Aggregation is a special form of association where the child can exist independently of the parent.

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    describe() {
        console.log(`Department: ${this.name}`);
        console.log('Employees:');
        this.employees.forEach(emp => emp.greet());
    }
}

let dept = new Department('Engineering');
dept.addEmployee(person1);
dept.addEmployee(employee1);
dept.describe();
// Output:
// Department: Engineering
// Employees:
// Hello, my name is Alice and I am 30 years old.
// Hello, my name is Charlie and I am 28 years old.

/*
  8. Association
*/
// Association represents the relationship between two separate classes that establish through their objects. 

class Teacher {
    constructor(name) {
        this.name = name;
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }

    learn() {
        console.log(`${this.name} is learning.`);
    }
}

let teacher = new Teacher('Mr. Smith');
let student = new Student('John');

teacher.teach(); // Output: Mr. Smith is teaching.
student.learn(); // Output: John is learning.

/*
  9. Method Overriding
*/
// Method overriding is a feature that allows a subclass to provide a specific implementation of a
// method that is already defined in its superclass.

class Animal {
    makeSound() {
        console.log('Some generic animal sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Woof! Woof!');
    }
}

let animal = new Animal();
let dog = new Dog();

animal.makeSound(); // Output: Some generic animal sound
dog.makeSound();    // Output: Woof! Woof!

/*
  10. Method Overloading
*/
// JavaScript does not support method overloading in the traditional
/// sense (multiple methods with the same name but different parameters).
// However, we can simulate it using default parameters or the arguments object.

class MathOperations {
    add(a, b, c) {
        if (typeof c !== 'undefined') {
            return a + b + c;
        }
        return a + b;
    }
}

let math = new MathOperations();
console.log(math.add(1, 2));       // Output: 3
console.log(math.add(1, 2, 3));    // Output: 6

/*
  11. Static Methods and Properties
*/
// Static methods and properties are called on the class itself, not on instances of the class.

class Utility {
    static calculateArea(radius) {
        return Math.PI * radius * radius;
    }
}

console.log(Utility.calculateArea(5)); // Output: 78.53981633974483

/*
  12. Getters and Setters
*/
// Getters and setters allow you to define methods that are executed when a property is accessed or modified.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width + this.height;
    }

    set area(value) {
        console.log('You cannot set the area directly.');
    }
}

let rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 30
rect.area = 100; // Output: You cannot set the area directly.

/*
  13. Operator Overloading
*/
// JavaScript does not support operator overloading. Operator overloading allows operators 
// to have user-defined meanings on user-defined types. However, we can achieve similar 
// functionality using methods.

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

let num1 = new ComplexNumber(1, 2);
let num2 = new ComplexNumber(3, 4);
let sum = num1.add(num2);
console.log(sum.toString()); // Output: 4 + 6i
