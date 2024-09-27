// Web Storage API

// With web storage, web applications can store data locally within the user's browser.

// HTML Web Storage Objects

// HTML web storage provides two objects for storing data on the client:

//     window.localStorage - stores data with no expiration date
//     window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

// 1. LocalStorage - The localStorage object stores the data with no expiration date. The data will not be
// deleted when the browser is closed, and will be available the next day, week, or year.

// localStorage.setItem("userid","734824643");
// console.log(localStorage.getItem("userid"));
// localStorage.removeItem("userid");

// 2. SessionStorage - The sessionStorage object is equal to the localStorage object, except that it stores
// the data for only one session. The data is deleted when the user closes the specific browser tab.

// sessionStorage.setItem("userid","734824643");
// console.log(sessionStorage.getItem("userid"));
// sessionStorage.removeItem("userid");

//3. Fetch - The Fetch API interface allows web browser to make HTTP requests to web servers.
// It always returns the promise.

// const getData = async () => {
// let response = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     if(!response.ok){
//         throw new Error('Not got');
//     }
//     let data = response.json();
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch((err)=>{
//     console.log("Err : " + err);
//     throw err;
// });
// }

// const success = async () => {
//     console.log("Thanks for using fetch");
// }

// getData().then(() => {
//     success();
// }).catch((err) =>{
//     console.log(err);
// })

// 4. Geolocation API - The Geolocation API allows the user to provide their location to web applications if they so desire.
// Example usage:

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         console.log("Latitude:", position.coords.latitude);
//         console.log("Longitude:", position.coords.longitude);
//     });
// } else {
//     console.log("Geolocation is not supported in this browser");
// }

// 5. Notification API - The Notification API allows web pages to control the display of system notifications to the user.
// Example usage:


// if ( window.Notification.permission === "granted") {
//     new Notification("Hello, World!");
// } else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//             new Notification("Hello, World!");
//         }
//     });
// }
