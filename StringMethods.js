const str = "Kar Har Maidaan Fateh";

// 1. length() - Returns the number of characters in a string
let length = str.length;
console.log(length);  // Output: 20

// 2. replace() - Replaces a substring/pattern in the string
let replaced = str.replace("Har", "Every");
console.log(replaced);  // Output: "Kar Every Maidaan Fateh"

// 3. indexOf() - Returns the first index of occurrence of a value
let index = str.indexOf("Maidaan");
console.log(index);  // Output: 8

// 4. lastIndexOf() - Returns the last index of occurrence of a value
let lastIndex = str.lastIndexOf("Har");
console.log(lastIndex);  // Output: 4

// 5. startsWith() - Checks if a string begins with a specified string
let starts = str.startsWith("Kar");
console.log(starts);  // Output: true

// 6. endsWith() - Checks if a string ends with a specified string
let ends = str.endsWith("Fateh");
console.log(ends);  // Output: true

// 7. toUpperCase() - Returns the uppercase version of a string
let upper = str.toUpperCase();
console.log(upper);  // Output: "KAR HAR MAIDAAN FATEH"

// 8. toLowerCase() - Returns the lowercase version of a string
let lower = str.toLowerCase();
console.log(lower);  // Output: "kar har maidaan fateh"

// 9. includes() - Checks if the given string is found inside a string
let includes = str.includes("Maidaan");
console.log(includes);  // Output: true

// 10. repeat() - Returns a string by repeating it a given number of times
let repeated = str.repeat(2);
console.log(repeated);  // Output: "Kar Har Maidaan FatehKar Har Maidaan Fateh"

// 11. charAt() - Returns the character at a specified index in a string
let char = str.charAt(4);
console.log(char);  // Output: "H"

// 12. charCodeAt() - Returns the Unicode of the character at a given index
let code = str.charCodeAt(4);
console.log(code);  // Output: 72

// 13. fromCharCode() - Returns a string from the given UTF-16 code units
let fromCharCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log(fromCharCode);  // Output: "Hello"

// 14. substring() - Returns a specified part of the string
let part = str.substring(4, 7);
console.log(part);  // Output: "Har"

// 15. padStart() - Pads a string at the start to a given length
let paddedStart = str.padStart(25, " ");
console.log(paddedStart);  // Output: "     Kar Har Maidaan Fateh"

// 16. padEnd() - Pads a string at the end to a given length
let paddedEnd = str.padEnd(25, " ");
console.log(paddedEnd);  // Output: "Kar Har Maidaan Fateh     "

// 17. codePointAt() - Returns the Unicode point value at a given index
let codePoint = str.codePointAt(4);
console.log(codePoint);  // Output: 72

// 18. fromCodePoint() - Returns a string using the given code points
let fromCodePoint = String.fromCodePoint(72, 101, 108, 108, 111);
console.log(fromCodePoint);  // Output: "Hello"

// 19. match() - Returns the result of matching the string with a regex
let match = str.match(/Har/g);
console.log(match);  // Output: ["Har"]

// 20. matchAll() - Returns an iterator of results matching with a regex
let matchAll = str.matchAll(/a/g);
for (const match of matchAll) {
    console.log(match);
}
// Output: ["a"], ["a"], ["a"], ["a"]

// 21. localeCompare() - Compares two strings in the current locale
let comparison = str.localeCompare("Har");
console.log(comparison);  // Output: 1 (because "K" > "H" in Unicode order)

// 22. search() - Searches for a specified value in the string and returns its position
let position = str.search("Maidaan");
console.log(position);  // Output: 8

// 23. replaceAll() - Returns a string by replacing all matching patterns
let replacedAll = str.replaceAll("Har", "Victory");
console.log(replacedAll);  // Output: "Kar Victory Maidaan Victory"

// 24. concat() - Concatenates the arguments to the calling string
let concatenated = str.concat(" - ", "Motivational Song");
console.log(concatenated);  // Output: "Kar Har Maidaan Fateh - Motivational Song"

// 25. split() - Returns the string divided into a list of substrings
let split = str.split(" ");
console.log(split);  // Output: ["Kar", "Har", "Maidaan", "Fateh"]

// 26. trim() - Removes whitespace from both ends of a string
const strWithWhitespace = "  Kar Har Maidaan Fateh  ";
let trimmed = strWithWhitespace.trim();
console.log(trimmed);  // Output: "Kar Har Maidaan Fateh"

// 27. slice() - Extracts and returns a section of the string
let sliced = str.slice(4, 7);
console.log(sliced);  // Output: "Har"
