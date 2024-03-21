// Exercise 1
// Create a one line function (ie. an arrow function)
// that receives two numbers as parameters and returns the sum.

// const addition = (a, b) => a + b
// console.log(addition(5, 10));

// Exercise 2

// Create a function that receives a weight in kilograms
// and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// function convertKilosToGram(num) {
//     return num * 100
// }
// const kilos = convertKilosToGram(3)
// console.log(kilos);


// Then, use function expression and invoke it.
// const kilos = function (num) {
//     return num * 100

// }
// console.log(kilos(5));

// Finally, use a one line arrow function and invoke it.

// const kilos = ((num) => num * 100)
// console.log(kilos(6));

// Exercise 3

// Create a self invoking function that takes 4 arguments: number of children,
// partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like
// "You will be a <job title> in <geographic location>,
//  and married to <partner's name> with <number of children> kids."

// (function (numberOfChildren, partnerName, geographicLocation, job) {
//     const div = document.getElementById("container")
//     div.textContent = `You will be a ${job} in ${geographicLocation},
//     and married to ${partnerName} with ${numberOfChildren} kids.`

// })(2, "Celine", "Tel aviv", "Developer")

// Exercise 4
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument:
//  the name of the user that just signed in.
// The function should add a div in the nabvar,
// displaying the name of the user and his profile picture.

// (function (name) {
//     const div = document.createElement("div");
//     div.innerText = name;

//     const img = document.createElement("img");
//     img.src = "https://picsum.photos/64";

//     const navbar = document.querySelector(".navbar");
//     navbar.appendChild(div);
//     navbar.appendChild(img);

// }("ben"))