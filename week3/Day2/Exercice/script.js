// Exercise 1

// 1.Using a DOM property, retrieve the h1 and console.log it.

// let paragraph = document.querySelector("h1")
// console.log(paragraph);

// 2.Using DOM methods, remove the last paragraph in the <article> tag.
// let allP = document.querySelectorAll("p")
// let lasP = allP[3]
// lasP.remove()

// 3.Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let secondP = document.querySelector("h2")

// secondP.addEventListener("click", () => {
//     secondP.style.background = "red"
// })

// 4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let thirdP = document.querySelector("h3")

// thirdP.addEventListener("click", () => {
//     secondP.style.display = "none"
// })
// 5.Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const button = document.getElementById("btn")
// const para = document.querySelectorAll("p")

// for (const p of para) {
//     button.addEventListener("click", () => {
//         p.style.fontWeight = "bold"
//     })

// }

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// let paragraph = document.querySelector("h1")


// paragraph.addEventListener("mouseover", () => {
//     const randomPixelSize = Math.floor(Math.random() * 101);
//     paragraph.style.fontSize = `${randomPixelSize}px`
// })

// Exercise 2

// 1.Retrieve the form and console.log it.
// const form = document.querySelector('form')
// console.log(form);

// // // 2.Retrieve the inputs by their id and console.log them.
// const FirstInput = document.getElementById("fname")
// // console.log(FirstInput);

// const secondInput = document.getElementById("lname")
// // console.log(secondInput);

// const thirdInput = document.getElementById("submit")
// // console.log(thirdInput);


// 3.Retrieve the inputs by their name attribute and console.log them.
// const FirstInput = document.getElementsByName("firstname")
// console.log(FirstInput[0]);
// const secondInput = document.getElementsByName("lastname")
// console.log(secondInput[0]);

// 4.When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// const ul = document.querySelector(".usersAnswer")
// console.log(ul);

// thirdInput.addEventListener("click", (e) => {
//     e.preventDefault()
//     const FirstInputValue = FirstInput.value
//     const secondInputValue = secondInput.value
//     // console.log(FirstInputValue);
//     // console.log(secondInputValue);

//     if (FirstInputValue === "" || secondInputValue === "") {
//         console.log("please enter solmething");

//     } else {
//         const firstLi = document.createElement("li")
//         const secondLi = document.createElement("li")
//         firstLi.textContent = FirstInputValue
//         secondLi.textContent = secondInputValue
//         ul.appendChild(firstLi)
//         ul.appendChild(secondLi)
//     }

// })

// Exersice 3

// 1.Declare a global variable named allBoldItems.
// let allBoldItems;

// // 2.Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// function getBoldItems() {
//     allBoldItems = document.getElementsByTagName("strong")
// }

// 3.Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight() {
//     getBoldItems()

//     for (const color of allBoldItems) {
//         color.style.color = "blue"
//     }
// }

// // 4.Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// function returnItemsToDefault() {
//     getBoldItems()

//     for (const color of allBoldItems) {
//         color.style.color = "black"
//     }
// }
// // 5.Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// const para = document.querySelector("p")

// para.addEventListener("mouseover", highlight)
// para.addEventListener("mouseout", returnItemsToDefault)

