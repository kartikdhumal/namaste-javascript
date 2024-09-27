// Promise

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//The promise constructor takes only one argument which is a callback function
// The callback function takes two arguments, resolve and reject
//     Perform operations inside the callback function and if everything went well then call resolve.
//     If desired operations do not go well then call reject.

// A Promise has four states:

// 1. fulfilled: Action related to the promise succeeded
// 2. rejected: Action related to the promise failed
// 3. pending: Promise is still pending i.e. not fulfilled or rejected yet

// 1. Promise.all()

// Definition:
// Promise.all() takes an iterable of promises and returns a single promise that resolves when all of the promises in the iterable have resolved, or rejects if any of the promises reject.

// Syntax:
// Promise.all(iterable)

// - iterable: An iterable object (like an array) of promises.

// agar sare promise resolve h jay to ye ek single promise return karta he  and agar ek bhi promise reject ho jay to first rejected promsie return karta he 

// Example:
function firstPromise() {
    return new Promise((resolve, reject) => {
        resolve("firstPromise rejected");
    });
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        resolve("secondPromise rejected");
    });
}

function thirdPromise() {
    return new Promise((resolve, reject) => {
        resolve("thirdPromise resolved");
    });
}

let promiseArr = Promise.all([firstPromise(), secondPromise(), thirdPromise()]);

promiseArr.then((response) => {
    console.log("Promise.all : " + response);  // This will not be reached because of rejections
}).catch((err) => {
    console.log("Promise.all err : " + err);  // Output: 'firstPromise rejected'
});


// 2. Promise.race()

// Definition:
// Promise.race() returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// Syntax:
// Promise.race(iterable)

// - iterable: An iterable object (like an array) of promises.

// First resolved or rejected promise return karta he

// Example:
function firstPromise() {
    return new Promise((resolve, reject) => {
        reject("firstPromise rejected");
    });
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        reject("secondPromise rejected");
    });
}

function thirdPromise() {
    return new Promise((resolve, reject) => {
        resolve("thirdPromise resolved");
    });
}

let promiseRace = Promise.race([firstPromise(), secondPromise(), thirdPromise()]);

promiseRace.then((response) => {
    console.log("Promise.race : " + response);  // Output: 'thirdPromise resolved'
}).catch((err) => {
    console.log("Promise.race err : " + err);  // This will not be reached
});


// 3. Promise.allSettled()

// Definition:
// Promise.allSettled() returns a promise that resolves after all of the given promises have either resolved or rejected. It provides an array of objects describing the outcome of each promise.

// Syntax:
// Promise.allSettled(iterable)

// - iterable: An iterable object (like an array) of promises.

// whether all promise resolve or reject it returns array of objects.

// Example:
function firstPromise() {
    return new Promise((resolve, reject) => {
        reject("firstPromise rejected");
    });
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        reject("secondPromise rejected");
    });
}

function thirdPromise() {
    return new Promise((resolve, reject) => {
        resolve("thirdPromise resolved");
    });
}

let promiseSett = Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()]);

promiseSett.then((response) => {
    console.log("Promise.allSettled : " + response);
    response.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} resolved with value: ${result.value}`);
        } else if (result.status === 'rejected') {
            console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
        }
    });
});


// 4. Promise.any()

// Definition:
// Promise.any() returns a promise that resolves as soon as any of the given promises fulfill. If no promises fulfill (i.e., all are rejected), it rejects with an AggregateError, which groups together all the rejection reasons.

// Syntax:
// Promise.any(iterable)

// - iterable: An iterable object (like an array) of promises.

// first resolved promise return karta he if any of them fail to Aggregateerror return karta he

// Example:
function firstPromise() {
    return new Promise((resolve, reject) => {
        reject("firstPromise rejected");
    });
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        reject("secondPromise rejected");
    });
}

function thirdPromise() {
    return new Promise((resolve, reject) => {
        resolve("thirdPromise resolved");
    });
}

let promiseAny = Promise.any([firstPromise(), secondPromise(), thirdPromise()]);

promiseAny.then((response) => {
    console.log("Promise.any : " + response);  // Output: 'thirdPromise resolved'
}).catch((err) => {
    console.log("Promise.any err : " + err);  // This will not be reached
});
