// Exercise 1
// Create a function called compareToTen(num)
// that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve("Great it's samaller than 10, all good");
//         } else {
//             reject("Try again it's bigger than 10")
//         }
//     })
// }

// compareToTen(15)
//     .then((res) => console.log((res)))
//     .catch((err) => console.error((err)))

// Exercise 2

// Create a promise that resolves itself in 4 seconds
// and returns a “success” string.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("succes")
//     }, 4000);
// })
// promise.then(console.log).catch(console.error)

// Exercise 3

// Use Promise.resolve(value) to create a promise
// that will resolve itself with a value of 3.
// const promise = Promise.resolve(2);
// const promise2 = Promise.reject("boo");

// promise.then((res) => console.log(res));

// // Use Promise.reject(error) to create a promise
// // that will reject itself with the string “Boo!
// promise2.catch((err) => console.log(err));