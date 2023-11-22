// Exercise 1
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger

let x = 5;
let y = 2;

if (x > y) {
    console.log("x is biggest number");

} else {
    console.log("y is biggest number");
}

// Exercise 2
// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";

// Check and display how many letters are in newDog. 
console.log(newDog.length);

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice). 
console.log(newDog.toLocaleLowerCase());
console.log(newDog.toLocaleUpperCase());

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");

} else {
    console.log("‘I dont care, I prefer cats’");
}

// Exercise 3 
// Prompt the user for a number and save it to a variable.
// let chooseNumber = prompt("choose a number !");

// if (chooseNumber % 2 === 0) {
//     console.log(`${chooseNumber} is a even number`);

// } else {
//     console.log(`${chooseNumber} is a odd number`);
// }

// Exercise 4

const users = []

let sentence;
if (users.length === 0) {
    sentence = ("No one is on line");
} else if (users.length === 1) {
    sentence = (`${users[0]} is on line`);
} else if (users.length === 2) {
    sentence = (`${users[0]} and ${users[1]} are on line`);
} else {
    const userRemain = users.length - 2
    sentence = (`${users[0]}, ${users[1]} and ${userRemain} more are on line`);
}

console.log(sentence);
