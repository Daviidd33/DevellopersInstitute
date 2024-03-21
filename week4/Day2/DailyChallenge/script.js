let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries,
// that console.logs the 3 fruits from the groceries object.
// Use the forEach method.

// const displayGroceries = () => {
//     let fruits = groceries.fruits
//     fruits.forEach((fruit) => {
//         console.log(fruit);
//     })
// };
// displayGroceries()

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user
// that is a copy of the client variable.
// (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”.

// const cloneGroceries = () => {
//     let user = client // = john
//     client = "betty"
//     // console.log(`log user: ${user}`); // john
//     // console.log(`log client : ${client}`); //betty

//     let shopping = groceries
//     let totalPrice = groceries.totalPrice
//     totalPrice = "35e"
//     console.log(totalPrice);
//     console.log(shopping);

//     let paid = groceries.other.paid
//     paid = false
//     console.log(paid);
//     console.log(shopping.other);
// }
// cloneGroceries()

// Will we also see this modification in the user variable ? Why ?
// no

// In the function, create a variable named shopping that is equal
// to the groceries variable.
// Change the value of the totalPrice key to 35$.
// Will we also see this modification in the shopping object ? Why ?
// no
// Change the value of the paid key to false.
// Will we also see this modification in the shopping object ? Why ?
// no