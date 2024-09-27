// Diffrence between == and ===

// Two Types

//     Double equality (==)
//     Triple equality (===)

// In Javascript, equality operators like double equals (==) and triple equals (===) are used to compare two values. 
//But both operators do different jobs. Double equals (==) will try to convert the values to the same data
// type and then try to compare them. But triple equals (===) strictly compares the value and the datatype.

let str = "10";
let num = 10;

console.log(str == num ? "Both are same " : " Not same");
console.log(str === num ? "Both are same " : "Not same");