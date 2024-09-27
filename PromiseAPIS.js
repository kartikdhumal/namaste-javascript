// Promise.all()
// Definition:
// Promise.all() takes an iterable of promises (such as an array) and returns a single Promise that resolves
// when all of the input promises have resolved.It rejects with the reason of the first promise that rejects.

// If all true then resolves with an array of resolved values else will return first rejected promise

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log('Promise.all resolved values:', values); // [1, 2, 3]
    })
    .catch(error => {
        console.error('Promise.all rejected with error:', error);
    });

// Promise.allSettled()
// Definition:
// Promise.allSettled() takes an iterable of promises and returns a single Promise that resolves after all 
// of the given promises have either resolved or rejected.
// It always resolves with an array of objects that each describe the outcome of each promise.

const p4 = Promise.resolve(4);
const p5 = Promise.reject('Error');
const p6 = Promise.resolve(6);

Promise.allSettled([p4, p5, p6])
    .then(results => {
        console.log('Promise.allSettled results:', results);
        // [
        //     { status: 'fulfilled', value: 4 },
        //     { status: 'rejected', reason: 'Error' },
        //     { status: 'fulfilled', value: 6 }
        // ]
    });

// Promise.race()
// Definition:
// Promise.race() takes an iterable of promises and returns a single Promise that resolves or rejects as soon 
// as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// It will return the first promise no matter it is resolved or rejected

const p7 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const p8 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Second'));
const p9 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

Promise.race([p7, p8, p9])
    .then(value => {
        console.log('Promise.race resolved value:', value); // 'First'
    })
    .catch(error => {
        console.error('Promise.race rejected with error:', error);
    });

// Promise.any()
// Definition:
// Promise.any() takes an iterable of promises and returns a single Promise that resolves as soon as any of the promises in the iterable resolves, 
// with the value from that promise. If none of the promises resolve, it rejects with an AggregateError containing all the rejection reasons.


const p10 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error1'));
const p11 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Error2'));
const p12 = new Promise((resolve) => setTimeout(resolve, 300, 'Success'));

Promise.any([p10, p11, p12])
    .then(value => {
        console.log('Promise.any resolved value:', value); // 'Success'
    })
    .catch(errors => {
        console.error('Promise.any rejected with errors:', errors.errors);
        // AggregateError: All promises were rejected
        // errors.errors => ['Error1', 'Error2']
    });
