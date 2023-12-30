// Exercise 1
// Part I : function with no parameters :

// 1. Create a function called infoAboutMe() that takes no parameter.
// 2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// 3. Call the function.


// function infoAboutMe() {
//     console.log("my name is David");
// }

// infoAboutMe()

// Part II : function with three parameters :

//1. Create a function called infoAboutPerson(name, age, color) that takes 3 parameters.
//2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//3. Call the function twice with the following arguments:

// function infoAboutPerson(name, age, color) {
//     console.log(`My name is ${name}, im ${age} and my favourite colors is ${color}`);
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 :

//1. Create a function named calculateTip() that takes no parameter.
//2. Inside the function, use prompt to ask John for the amount of the bill.
//3. Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

//4. Console.log the tip amount and the final bill (bill + tip).
//5.Call the calculateTip() function.

// function calculateTip() {
//     let amount = Number(prompt("what is the amount of th bill ?"));
//     let tipPersent

//     if (amount < 50) {
//         tipPersent = 0.2
//     } else if (amount > 50 && amount < 200) {
//         tipPersent = 0.15
//     } else {
//         tipPersent = 0.1
//     }

//     const finallBill = amount * (1 + tipPersent)

//     console.log("bills: ", amount);
//     console.log("finallBill: ", finallBill);
// }

// calculateTip();

// Exercise 3 :

//1. Create a function call isDivisible() that takes no parameter.

//2. In the function, loop through numbers 0 to 500.

//3. Console.log all the numbers divisible by 23.

// function isDivisible() {
//     let sum = 0;

//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i
//         }
//     }
//     console.log(sum);
// }

// isDivisible();

// Exercise 4 :

// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }

// let shoppingList = ["banana", "orange", "apple"];

// function myBill() {

//     for (const item of shoppingList) {

//         let quantityStock = stock[item];

//         if (quantityStock > 0) {
//             const price = prices[item]
//             console.log(`Stock before ${quantityStock}`);
//             quantityStock -= 1
//             console.log(`The price of ${item} is ${price}`);
//             console.log(`And we have now ${quantityStock} ${item}  in stock`);
//         } else {
//             console.log(`There is no ${item} in stock`);
//         }

//     }
// }
// myBill();

// Exercise 5 : 
