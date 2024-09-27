// Async and Await

// Async functions always return a promise. The `await` keyword is used only in async functions to wait for a promise.

// Async functions will always return a value. It ensures that a promise is returned, and if it is not returned,
// then JavaScript automatically wraps it in a promise which is resolved with its value.

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sabse pehle me aaya");
            resolve();
        }, 3000);
    });
}

function getData2() {
    console.log("Me pehle aaya");
}

async function run() {
    // `await` pauses the execution of the async function until the promise is resolved
    await getData();
    getData2();
}

run();
// Output will be:
// Sabse pehle me aaya
// Me pehle aaya

// Error Handling in Async/Await
// Async functions can use try/catch blocks to handle errors in a more synchronous style.

async function getDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong!");
        }, 3000);
    });
}

async function runWithErrorHandling() {
    try {
        await getDataWithError();
        console.log("This will not be printed");
    } catch (error) {
        console.log("Error caught: " + error); // Output: Error caught: Something went wrong!
    }
}

runWithErrorHandling();

// Chaining Async Functions
// You can chain multiple async functions to run one after another.

async function getData3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third function called");
            resolve("Data from getData3");
        }, 2000);
    });
}

async function runChained() {
    await getData();
    await getData3();
    getData2();
}

runChained();
// Output will be:
// Sabse pehle me aaya
// Third function called
// Me pehle aaya

// Parallel Execution
// To run async functions in parallel, you can use `Promise.all`.

async function getDataParallel1() {
    return new Promise((resolve) => {
        console.log("Parallel function 1");
        resolve("Data from parallel 1");
    });
}

async function getDataParallel2() {
    return new Promise((resolve) => {
        console.log("Parallel function 2");
        resolve("Data from parallel 2");
    });
}

async function runParallel() {
    await Promise.all([getDataParallel1(), getDataParallel2()]);
    console.log("Both parallel functions have completed");
}

runParallel();
// Output will be:
// Parallel function 2
// Parallel function 1
// Both parallel functions have completed
