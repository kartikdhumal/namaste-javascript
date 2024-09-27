// Performance and Optimization

// 1. Debouncing and Throttling

// 1.1 Debouncing
// Debouncing ensures that a function is not called multiple times in quick succession.
// It is useful for optimizing performance of operations like resizing, scrolling, or keypress events.

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Example usage:
window.addEventListener('resize', debounce(() => {
    console.log('Resized!');
}, 300));

// 1.2 Throttling
// Throttling ensures that a function is called at most once in a specified period.
// It is useful for rate-limiting operations like scrolling, mouse movement, or API calls.

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Example usage:
window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled!');
}, 300));

// 2. Lazy Loading

// Lazy loading is a design pattern that defers the loading of non-critical resources at page load time.
// Instead, these resources are loaded when they are needed. This improves initial load time and overall performance.

// 2.1 Lazy loading images
// Use the 'loading' attribute in the <img> tag with the value 'lazy'.

// Example:
//<img src="large-image.jpg" loading="lazy" alt="A large image">

// 2.2 Lazy loading JavaScript modules
// Use dynamic imports to load JavaScript modules when they are needed.

// Example:
document.getElementById('loadButton').addEventListener('click', async () => {
    const module = await import('./largeModule.js');
    module.doSomething();
});

// 3. Memory Management

// Memory management involves efficiently managing memory allocation and garbage collection to prevent leaks and optimize performance.

// 3.1 Avoiding memory leaks
// Ensure that objects are no longer referenced when they are not needed, so the garbage collector can reclaim memory.

function createLargeArray() {
    let largeArray = new Array(1000000).fill('Some data');
    // Ensure the large array is dereferenced when no longer needed
    largeArray = null;
}

// 3.2 Using WeakMap and WeakSet
// WeakMap and WeakSet hold weak references to objects, allowing them to be garbage collected when no longer in use.

const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'some value');
// obj = null; // Now the object can be garbage collected

// 4. Profiling and Debugging

// Profiling and debugging help identify performance bottlenecks and optimize code execution.

// 4.1 Using console.time and console.timeEnd
// Measure the time taken by a block of code to execute.

console.time('myFunction');
myFunction();
console.timeEnd('myFunction');

// 4.2 Using the Performance API
// The Performance API provides methods to measure and analyze the performance of web applications.

const start = performance.now();
myFunction();
const end = performance.now();
console.log(`myFunction took ${end - start} milliseconds`);

// 4.3 Using browser developer tools
// Browser developer tools (e.g., Chrome DevTools) offer built-in profiling and debugging tools.

console.log('Use Chrome DevTools for profiling:');
// 1. Open DevTools (F12 or right-click -> Inspect).
// 2. Go to the 'Performance' tab.
// 3. Click 'Record' and perform the actions you want to profile.
// 4. Click 'Stop' to analyze the performance.

console.log('Use Chrome DevTools for debugging:');
// 1. Open DevTools (F12 or right-click -> Inspect).
// 2. Go to the 'Sources' tab.
// 3. Set breakpoints, step through code, and inspect variables.

