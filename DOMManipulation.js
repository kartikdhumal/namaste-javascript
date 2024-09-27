/*
  DOM Documentation
*/

// Introduction to DOM
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page 
// so that programs can change the document structure, style, and content. The DOM represents the
// document as nodes and objects, allowing scripts to update the content, structure, and style 
// of a document while it's being viewed.

/*
  What is a DOM Tree?
*/
// The DOM tree is a hierarchical representation of the HTML document. Each element, attribute,
// and piece of text in the HTML is represented as a node in the tree. This tree structure 
// allows the HTML document to be easily manipulated with a scripting language like JavaScript.

// Example:
// HTML Structure
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Sample Page</title>
// </head>
// <body>
//     <h1>Welcome to the DOM</h1>
//     <p>This is a paragraph.</p>
// </body>
// </html>

// Corresponding DOM Tree:
// Document
//  ├── html
//  |    ├── head
//  |    |    └── title
//  |    |         └── "Sample Page"
//  |    └── body
//  |         ├── h1
//  |         |    └── "Welcome to the DOM"
//  |         └── p
//  |              └── "This is a paragraph."

/*
  DOM Methods and Properties
*/

/*
  document.querySelector()
*/
// The document.querySelector() method returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, it returns null.
// Example:
let firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';

/*
  document.querySelectorAll()
*/
// The document.querySelectorAll() method returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// Example:
let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraph => {
  paragraph.style.color = 'blue';
});

/*
  document.createElement()
*/
// The document.createElement() method creates the HTML element specified by tagName.
// Example:
let newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello, World!';
document.body.appendChild(newDiv);

/*
  Element.innerHTML
*/
// The Element.innerHTML property sets or gets the HTML or XML markup contained within the element.
// Example:
let paragraph = document.querySelector('p');
paragraph.innerHTML = 'Updated content';

/*
  Element.setAttribute()
*/
// The Element.setAttribute() method adds a new attribute or changes the value of an existing attribute on the specified element.
// Example:
let image = document.querySelector('img');
image.setAttribute('src', 'image.jpg');

/*
  Element.getAttribute()
*/
// The Element.getAttribute() method returns the value of a specified attribute on the element. If the given attribute does not exist, it returns null.
// Example:
let link = document.querySelector('a');
let hrefValue = link.getAttribute('href');
console.log(hrefValue);

/*
  EventTarget.addEventListener()
*/
// The EventTarget.addEventListener() method sets up a function that will be called whenever the specified event is delivered to the target.
// Example:
let buttons = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button was clicked!');
});

/*
  HTMLElement.style
*/
// The HTMLElement.style property is used to get or set the inline style of an element.
// Example:
let div = document.querySelector('div');
div.style.backgroundColor = 'yellow';

/*
  Node.appendChild()
*/
// The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. If the node already exists in the document, it is moved from its current position to the new position.
// Example:
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
document.body.appendChild(newParagraph);

/*
  window.onload
*/
// The window.onload event occurs when the entire page (including all dependent resources such as stylesheets and images) has loaded.
// Example:
window.onload = function () {
  alert('Page is fully loaded');
};

/*
  window.scrollTo()
*/
// The window.scrollTo() method scrolls to a particular set of coordinates in the document.
// Example:
window.scrollTo(0, 500); // Scrolls to 500px down the page


// What is an Event?

// An event is an action or occurrence recognized by software, often originating from the user.
// Common examples of events include clicks, key presses, and mouse movements. Events are a crucial 
// part of interactive web applications, enabling user interaction and dynamic behavior.

// Mouse Events:
// - click: Fired when a pointing device button (usually a mouse's primary button) is pressed and released on a single element.
// - dblclick: Fired when a pointing device button is clicked twice on a single element.
// - mouseenter: Fired when a pointing device is moved onto the element that has the listener attached.
// - mouseleave: Fired when a pointing device is moved off the element that has the listener attached.

let button = document.getElementById('myButton');
button.addEventListener('click', function () {
  alert('Button clicked!');
});

button.addEventListener('dblclick', function () {
  alert('Button double-clicked!');
});

button.addEventListener('mouseenter', function () {
  console.log('Mouse entered button area');
});

button.addEventListener('mouseleave', function () {
  console.log('Mouse left button area');
});

// Keyboard Events:
// - keydown: Fired when a key is pressed down.
// - keyup: Fired when a key is released.

document.addEventListener('keydown', function (event) {
  console.log('Key down: ' + event.key);
});

document.addEventListener('keyup', function (event) {
  console.log('Key up: ' + event.key);
});

// Form Events:
// - submit: Fired when a form is submitted.
// - change: Fired when the value of an element has been changed.
// - input: Fired when the value of an <input>, <textarea>, or <select> element has been changed.

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  console.log('Form submitted');
});

let inputField = document.querySelector('input');
inputField.addEventListener('change', function () {
  console.log('Input changed: ' + inputField.value);
});

inputField.addEventListener('input', function () {
  console.log('Input value: ' + inputField.value);
});

// Window Events:
// - resize: Fired when the document view (window) has been resized.
// - scroll: Fired when the document view or an element has been scrolled.

window.addEventListener('resize', function () {
  console.log('Window resized');
});

window.addEventListener('scroll', function () {
  console.log('Window scrolled');
});

// Clipboard Events:
// - copy: Fired when the user initiates a copy action through the browser's UI.
// - paste: Fired when the user initiates a paste action through the browser's UI.

document.addEventListener('copy', function () {
  console.log('Content copied');
});

document.addEventListener('paste', function () {
  console.log('Content pasted');
});