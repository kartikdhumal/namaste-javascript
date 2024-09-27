const crushes = ['Kiara Advani', 'Sara Ali Khan', 'Janhvi Kapoor', 'Emma Mackey', 'Ananya Panday', 'Shraddha Kapoor', 'Rashmika Mandanna', 'Priyanka Mohan', 'Rashi Khanna', 'Tamannaah Bhatia'];

const goats = [{ id: 1, name: 'Rohit Sharma' }, { id: 2, name: 'Shikhar Dhawan' }, { id: 3, name: 'Virat Kohli' }, { id: 4, name: 'Suresh Raina' }, { id: 5, name: 'MS Dhoni (C & WK)' }, { id: 6, name: 'Yuvraj Singh' }, { id: 7, name: 'Hardik Pandya' }, { id: 8, name: 'Ravindra Jadeja' }, { id: 9, name: 'Ravichandran Ashwin' }, { id: 10, name: 'Jasprit Bumrah' }, { id: 11, name: 'Ashish Nehra' }];

const numofcrushes = {
    2017 : 2,
    2018 : 1,
    2021 : 2,
    2023 : 2
}


// 1. Length - The length property returns or sets the number of elements in an array.

// let length = crushes.length;
// console.log(length);


// 2. Reverse() - Returns the array in reverse order

// let reversed = crushes.reverse();
// console.log(reversed);


// 3. Sort() - The sort() method sorts the items of an array in a specific order (ascending or descending).

// let sorted = crushes.sort();
// console.log(sorted);


// 4. fill() - The fill() method returns an array by filling all elements with a specified value.

// let filled = crushes.fill("Shraddha Kappor");
// console.log(filled);


// 5. join() - The join() method returns a new string by concatenating all of the elements in an array,
// separated by a specified separator.

// let joined = crushes.join(" ❤️ ");
// console.log(joined);


// 6. toString() - The toString() method returns a string formed by the elements of the given array. 

// let itemString = crushes.toString();
// console.log(itemString);


// 7. Pop() - The pop() method removes the last element from an array and returns that element.

// let pop = crushes.pop();
// console.log(crushes);


// 8. Shift() - The shift() method removes the first element from an array and returns that element.

// let popfirst = crushes.shift();
// console.log(crushes);


// 9. push() - The push() method adds zero or more elements to the end of the array.

// let push = crushes.push("Shruti Hassan");
// console.log(crushes);


// 10. unshift() - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// let unshifted = crushes.unshift("Alia Bhatt" , "Pratibha Ranta");
// console.log(crushes);


// 11. concat() - The concat() method returns a new array by merging two or more values/arrays.

// let oldCrushes = ["Katrina Kaif" , "Tara sutaria","kriti sanon"];
// let newarr = crushes.concat(oldCrushes);
// console.log(newarr);


// 12. splice() - The splice() method modifies an array (adds, removes, or replaces elements).

// Add a new crush to the array at index 4.
// const newCrushes1 = crushes.slice(); // Create a copy of the original array
// newCrushes1.splice(4, 0, 'Aditi Rao Haidari'); // Add 'Aditi Rao Haidari' at index 4
// console.log(newCrushes1);

// Remove the crush at index 2 from the array.
// const removedCrush = crushes.splice(2, 1); // Remove 1 element starting from index 2
// console.log(removedCrush);

// Replace the crush at index 3 with 'Alia Bhatt'.
// const replacedCrush = crushes.splice(3, 1, 'Alia Bhatt'); // Replace 1 element at index 3 with 'Alia Bhatt'
// console.log(replacedCrush);


// 13. lastIndexOf() - The lastIndexOf() method returns the index of the last occurrence of a specified element
// in the array.

// let lastname = crushes.lastIndexOf("Rashi Khanna");
// console.log(lastname);


// 14. indexOf() - The indexOf() method returns the first index of occurance of an array element, or -1 if it 
// is not found.

// let firstindex = crushes.indexOf("Rashi Khanna");
// console.log(firstindex);


// 15. Array.of()  - The of() method creates a new array instance from the given arguments

// let newarr = Array.of("Yami Gautam" , "Pratibha ranka");
// console.log(newarr);


// 16. slice() - The slice() method returns a shallow copy of a portion of an array into a new array object.

// let arr = crushes.slice(6,11);
// console.log(arr);


// 17. findIndex() -The findIndex() method returns the index of the first array element that satisfies the 
// provided test function or else returns -1.

// let newarr = crushes.findIndex(crush => crush.includes('k'));
// console.log(newarr);


// 18. find() - The find() method returns the value of the first array element that satisfies the provided 
// test function.

// let kers = crushes.find(crush => crush.startsWith('K'));
// console.log(kers);


// 19. includes() - The includes() method checks if an array contains a specified element or not

// let seeS = crushes.includes('Kiara Advani');
// console.log(seeS ? "Kiara Advani exists" : "Kiara doesn't exists");


// 20. reduceRight() - The reduceRight() method reduces the array to a single value by executing a callback 
// function on two values of the array (from right to left).

// Parameters: callbackFn - A function to execute on each element in the array 
// (taking four arguments: accumulator, currentValue, currentIndex, array) and initialValue (optional) - A value to use as the first argument to the first call of the callbackFn.
// Concatenate all crush names into a single string in reverse order.
// const reversedCrushes = crushes.reduceRight((accumulator, current) => accumulator + ' ' + current);
// console.log(reversedCrushes); // Output: 'Tamannaah Bhatia Rashi Khanna Priyanka Mohan Rashmika Mandanna Shraddha Kapoor Ananya Panday Emma Mackey Janhvi Kapoor Sara Ali Khan Kiara Advani'


// 21. reduce() - The reduce() method executes a reducer function on each element of the array and returns a single output value.

// let strcrushes = crushes.reduce((acc,curr) => {
//     return acc + " " + curr;
// })
// console.log(strcrushes);


// 22. isArray() - The isArray() method checks whether the passed argument is an array or not.

// console.log(Array.isArray(crushes) ? "I am array" : "I am not array");


// 23. filter() - The filter() method returns a new array with all elements that pass the test defined 
// by the given function. 

// let kers = crushes.filter(crush => crush.includes('K') || crush.includes('k'));
// console.log(kers);


// 24. map() - The map() method creates a new array with the results of calling a function for every array element.

// let beacrush = crushes.map(crush => {
//     return "Beautiful " + crush.toUpperCase() + " ❤️";
// });

// console.log(beacrush);


// 25. forEach() - The forEach() method executes a provided function for each array element.

// crushes.forEach((crush,index) => {
//     console.log(`${index+1}. ${crush}`);
// })


// 26. The some() method tests whether any of the array elements pass the given test function.

// let checkD = crushes.some(crush => crush.startsWith('S'));
// console.log(checkD ? "Exists crush with S letter" : "Not exists");


// 27. every() - The every() method checks if all the array elements pass the given test function.

// let checkD = crushes.every(crush => crush.startsWith('S'));
// console.log(checkD ? "Every crush with S letter exists" : "Not exists");


// 28. entries() - The entries() method returns a new Array Iterator object containing key/value pairs 
// for each array index. 

// let newarr = crushes.entries();
// for(let n of newarr){
//     console.log(n);
// }


// 29. keys() - The keys() method returns a new Array Iterator object that contains the keys for each 
// element in the array.

// let newarr = crushes.keys();
// for(let n of newarr){
//     console.log(n);
// }


// 30. values() - The values() method returns a new Array Iterator object that contains the values for each
// index in the array.

// let newarr = crushes.values();
// for(let n of newarr){
//     console.log(n);
// }


// 31. Array.from() - The from() method creates a new array from any array-like or iterable object.

// let newarr = Array.from("Shraddha");
// console.log(newarr);



// 32. constructor - The constructor property returns the constructor function for the array.
 
// let con = crushes.constructor;
// console.log(con);


// 33. copyWithin() - The copyWithin() method copies array elements from one position to another in the
// given array. 

// console.log(crushes);
// crushes.copyWithin(0,2);
// console.log(crushes);


// 34. toLocaleString() - The Array.toLocaleString() method returns a string representing the elements of the 
// array in a particular locale. 

// let newarr = crushes.toLocaleString();
// console.log(newarr);


// 35. flat() - The flat() method creates a new array by flattening a nested array up to the specified depth. 

// let nums = [10,[20,30,[40,50,60]]];
// let arr = nums.flat(2);
// console.log(arr);


// 36. flatMap() - The flatMap() method first maps each element of an array using a mapping function,
// then flattens it into a new array. 

// let beacrush = crushes.flatMap(crush => {
//     return "Beautiful " + crush.toUpperCase() + " ❤️";
// });

// console.log(beacrush);