// ASYNCHRONOUS JAVASCRIPT

// Asynchronous JavaScript is a programming approach that enables the non-blocking execution of tasks, allowing 
// concurrent operations, improved responsiveness, and efficient handling of time-consuming operations in web 
// applications, JavaScript is a single-threaded and synchronous language. The code is executed in order one at 
// a time, But Javascript may appear to be asynchronous in some situations.


// EVENT LOOP

// The event loop is a fundamental concept in JavaScript that enables asynchronous programming.
// It is responsible for handling and executing code, collecting and processing events, and executing queued sub-tasks.
// Here’s a step-by-step explanation of how the event loop works:

// STEP 1: CALL STACK
// DESCRIPTION: The call stack is a LIFO (Last In, First Out) data structure that keeps track of function calls.
// OPERATION: When a function is called, it is pushed onto the call stack. When the function execution is complete, it is popped off the stack.

// STEP 2: WEB APIs
// DESCRIPTION: Browsers provide additional features like `setTimeout`, `DOM events`, `fetch`, and others through Web APIs.
// OPERATION: When asynchronous operations (e.g., `setTimeout`, `fetch`) are called, they are handled by the browser's Web APIs and do not block the call stack.

// STEP 3: CALLBACK QUEUE
// DESCRIPTION: Also known as the task queue, it is a queue that holds callback functions waiting to be executed.
// OPERATION: Once the Web API completes an asynchronous operation, it pushes the corresponding callback to the callback queue.

// STEP 4: EVENT LOOP
// DESCRIPTION: The event loop is a process that continuously checks the call stack and the callback queue.
// OPERATION:
// 1. The event loop checks if the call stack is empty.
// 2. If the call stack is empty, the event loop takes the first callback from the callback queue and pushes it onto the call stack for execution.
// 3. This process repeats, ensuring the single-threaded JavaScript environment can handle asynchronous operations without blocking.

// STEP 5: MICROTASK QUEUE
// DESCRIPTION: The microtask queue holds microtasks, which are usually callbacks from promises.
// OPERATION: The event loop checks the microtask queue after every task execution and before rendering. If there are any microtasks, they are executed before any other tasks from the callback queue.

// EXAMPLE

// Here’s an example to illustrate the event loop in action:

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("End");

// EXPECTED OUTPUT:
// Start
// End
// Promise callback
// Timeout callback

// STEP-BY-STEP EXECUTION:
// 1. "Start" is logged immediately (synchronous).
// 2. `setTimeout` is called with a delay of `0`. The callback is sent to the Web API and will be placed in the callback queue after the delay.
// 3. `Promise.resolve().then` is called. The callback is placed in the microtask queue.
// 4. "End" is logged immediately (synchronous).
// 5. The call stack is now empty, so the event loop checks the microtask queue first.
// 6. "Promise callback" is logged from the microtask queue.
// 7. The event loop then checks the callback queue.
// 8. "Timeout callback" is logged from the callback queue.

// SUMMARY
// - CALL STACK: Manages function calls and execution order.
// - WEB APIs: Handle asynchronous operations.
// - CALLBACK QUEUE: Stores callbacks from asynchronous operations.
// - EVENT LOOP: Manages execution order between the call stack and callback queue.
// - MICROTASK QUEUE: Handles promise callbacks and other microtasks with higher priority than the callback queue.

// Understanding the event loop is crucial for mastering asynchronous JavaScript and ensuring efficient and non-blocking code execution.
