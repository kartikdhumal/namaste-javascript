// What is Callback function

// A callback is a function that is passed as an argument to another function, 
// and is called after the main function has finished its execution

function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function () {
        callback("Operation complete");
    }, 1000);
}

// Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

// Why use Callbacks?

// CALLBACKS ARE USED TO HANDLE ASYNCHRONOUS OPERATIONS OR TO ENSURE CERTAIN CODE EXECUTES ONLY AFTER A SPECIFIC
// TASK IS COMPLETE.

// Issues with callbacks 

// 1. Callback Hell - Callback hell refers to the situation where callback functions are nested within one 
// another excessively, leading to code that is difficult to read, understand, and maintain. This commonly 
// occurs in asynchronous JavaScript code, particularly when handling multiple asynchronous operations.

asyncFunction1(() => {
    asyncFunction2(() => {
        asyncFunction3(() => {
            // More nested callbacks
        });
    });
});


// 2. Inversion Of Control

// Inversion of Control (IoC) is a design principle where the control of flow is inverted from the caller to 
// the callee, often facilitated through callbacks or event-driven programming. In IoC, the callee controls 
// when certain methods or functions are executed, which can lead to better modularity and decoupling in 
// software systems.

function fetchData(callback) {
    // Simulating asynchronous operation
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData(processData);
