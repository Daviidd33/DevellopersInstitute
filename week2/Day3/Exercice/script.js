// Exercice 1

// Part I
// const people = ["Greg", "Mary", "Devon", "James"];

// // Write code to remove “Greg” from the people array.
// people.shift()

// // Write code to replace “James” to “Jason”.
// people.splice(2, 1, "Jason")

// // Write code to add your name to the end of the people array.
// people.push("David");

// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf("Mary"));


// // Write code that gives the index of “Foo”. Why does it return -1 ?
// console.log(people.indexOf("foo"));

// // Create a variable called last which value is the last element of the array.
// const last = people[people.length - 1]
// console.log(last);

// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.
// for (let i of people) {
//     console.log(i);
// }

// Exercice 2
// let colors = ["bleu", "red", "orange", "purple", "green"];

// for (let i = 1; i < colors.length; i++) {
//     console.log(`My #${i+1} choise is ${colors[i]}`);
// };

// Exercice 3
// Prompt the user for a number.
// let numTwo = null
// // While the number
// // is smaller than 10 continue asking the user for a new number.
// while (numTwo < 10) {
//     let answer = prompt("what is your number ?")
//     numTwo = Number(answer)
// }

// Exercice 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 900],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }

// // Console.log the number of floors in the building.
// console.log(building.numberOfFloors);

// // Console.log how many apartments are on the floors 1 and 3.
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);

// // Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);


// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = building.numberOfRoomsAndRent.dan[1] + 1200
//     console.log(building.numberOfRoomsAndRent.dan[1]);
// }

// Exercice 5
// Create an object called family with a few key value pairs.4
// const family = {
//     name: "david",
//     familyName: "robert",
//     age: 3
// };

// // Using a for in loop, console.log the keys of the object.
// for (let x in family) {
//     console.log(x);
// }

// // Using a for in loop, console.log the values of the object.
// for (let i in family) {
//     console.log(family[i]);
// }

// Exercice 6

// a faire !!
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// let result = ""
// // Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
// for (let key in details) {
//     result += details[key] + " ";
// }
// console.log(result.trim());

// Exercice 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// // A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// let acronyme = '';

// for (const name of names.sort()) {
//     console.log(name);
//     acronyme = acronyme + name[0]
// }
// console.log(acronyme);