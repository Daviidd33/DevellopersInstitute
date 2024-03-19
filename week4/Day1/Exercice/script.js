// Exercice  1

// function winBattle(){
//     return true;
// }
// // Transform the winBattle() function to an arrow function.
// const winBattle = () => true

// // Create a variable called experiencePoints.
// let experiencePoints;

// // Assign to this variable, a ternary operator.
// // If winBattle() is true, the experiencePoints variable should be equal to 10,
// // else the variable should be equal to 1.
// experiencePoints = winBattle() ? 10 : 1

// // Console.log the experiencePoints variable.
// console.log(experiencePoints);

// Exercice  2
// Write a JavaScript arrow function that checks whether the value of the argument passed,
//  is a string or not.
//  The function should return true or false

// const isAString = (hello) => typeof (hello) === "string" ? true : false;

// console.log(isAString("hello"));

// Exercise 3
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // Write a JavaScript program that displays the colors in the following order
// //  : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…


// // Check if at least one element of the array is equal to the value “Violet”.
// // If yes, console.log("Yeah"), else console.log("No...")

// colors.forEach((number, index) => {
//     console.log(`${index + 1} is ${number}`);
//     number === "Violet" ? console.log("yes") : console.log("no..");
// })


// Exercice 4
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// // Write a JavaScript program that displays the colors in the following order :
// // “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

// colors.forEach((number, index) => {
//     const incrementIndex = index + 1
//     console.log(`my ${index + 1}${getOrdinal(incrementIndex)} is ${number}`);
// })

// function getOrdinal(index) {
//     if (index === 1 || index === 2 || index === 3) return ordinal[index]
//     return ordinal[0];
// }

// Exercice 5
// Create a global variable called bankAmount
//  which value is the amount of money currently in your account.
let bankAccount = 0

// Créez une variable qui permet d’économiser le % de TVA (en Israël, il est de 17%).
const vatRate = 0.17

// Create an array with all your monthly expenses, 
// both positive and negative (money made and money spent).
const details = ["+200", "-100", "+146", "+167", "-2900"]

// Create a program that modifies the expenses
// (ie. the positive AND the negative expenses) so that they will include taxes
// (multiply each expense by the VAT).



// Display your current bankAccount standing at the end of the month.
const currentBankAccount = addVat(details);
console.log(currentBankAccount);

// function addVat(expenses) {

//     let total = 0
//     expenses.forEach((expense) => {

//         const numExpence = Number(expense)
//         console.log(`without taxes ${numExpence}`);

//         const expenseWithVat = numExpence * (1 + vatRate)
//         console.log(`with taxes 17% ${expenseWithVat}`)
//         total += expenseWithVat
//     })
//     return total
// }

// With reduce ()methode

// function addVat(expenses) {
//     return expenses.reduce((total, current) => {
//         return (total += Number(current) * 1.17);
//     }, 0)
// }
