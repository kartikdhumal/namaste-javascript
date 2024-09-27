// Shadowing

// Shadowing in JavaScript occurs when a variable declared within a certain scope has 
// the same name as a variable in an outer scope

// var x = 50;

// function myFunc (){
//     var x = 20; // This variable shadows global variable var x = 50;
//     console.log(x);
// }

// myFunc();
// console.log(x);


// ILLEGAL SHADOWING

// When declaring variables, it's important to avoid illegal shadowing, where a variable in the same scope 
// is declared more than once. This can lead to a SyntaxError, as JavaScript does not allow redeclaration
// of variables using the same name within the same scope.

// Example 1: Illegal Shadowing with var and let

// var x = 50;
// let x = 20; // SyntaxError: Identifier 'x' has already been declared

// In this example, a SyntaxError occurs because the variable 'x' is declared with both 'var' and 'let' keywords in the same scope, resulting in illegal shadowing.

// Example 2: Correct Usage with var and let

var y = 40; // we can convert var to let.  but can't convert let to var

function myFunc() {
    let y = 50; // This variable 'y' is local to the function scope
    console.log(y); // Output: 50
}

myFunc();

// In this corrected example, there is no illegal shadowing. The variable 'y' declared with 'var' outside the function scope is distinct from the variable 'y' declared with 'let' inside the function scope. Inside the function 'myFunc()', the local variable 'y' shadows the outer variable 'y', but it's a valid and intentional use of variable scoping.
