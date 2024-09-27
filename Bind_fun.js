// Function bind()

// With the bind() method, an object can borrow a method from another object.

const person = {
    firstName: "Kartik",
    lastName: "Dhumal",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Guddu",
    lastName: "Pandit",
}

let fullName = person.fullName.bind(member);
console.log(fullName());