// Exercise 1 :

//1. Retrieve the div and console.log it
// let div = document.getElementById("container")
// console.log(div);

// 2.Change the name “Pete” to “Richard”.
// let li = document.getElementsByTagName("li")
// console.log(li);
// let pete = li[1]
// pete.textContent = "Richard"
// console.log(pete);

// 3.Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// let ul = document.getElementsByTagName("ul")
// console.log(ul);

// let secondUl = ul[1]
// let sarah = secondUl.children[1]
// secondUl.removeChild(sarah)
// console.log(secondUl);

// let li = document.getElementsByTagName("li")
// for (const e of li) {
//     e.textContent = "dav"
// }


// // Exercise 2
// // 1.Add a “light blue” background color
// //  and some padding to the <div>.
// let div = document.querySelector("div")
// div.style.background = "lightBlue"
// div.style.padding = "20px 25px";

// // 2.Do not display the <li> that contains the text node “John”.
// // (the first <li> of the <ul>)
// let ul = document.querySelector("ul")
// let firstLi = ul.firstElementChild
// firstLi.remove()

// // 3.Add a border to the <li> that contains the text node “Pete”.
// // (the second <li> of the <ul>)
// let secondUl = ul.lastElementChild
// secondUl.style.border = "2px solid black"

// // 4.Change the font size of the whole body.
// const body = document.body
// body.style.fontSize = "35px"

// Exercise 3

// // 1.Using Javascript, in the <div>,
// // change the value of the id attribute from navBar to socialNetworkNavigation,
// // using the setAttribute method.

// let div = document.getElementById("navBar")
// // div.setAttribute("navBar", "socialNetworkNavigation")
// // console.log(div);

// // 2. We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).
// let newLi = document.createElement("li")
// // Create a new text node with “Logout” as its specified text.
// let textLi = document.createTextNode("Logout")

// // Append the text node to the newly created list node (<li>).
// newLi.appendChild(textLi)

// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// let ul = document.querySelector("ul")
// ul.appendChild(newLi)
// console.log(ul);

// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last < li >
// //     elements from their parent element(<ul>).
// //         Display the text of each link. (
// //         Hint: use the textContent property).
// let firstChildUl = ul.firstElementChild
// console.log(firstChildUl.textContent);
// let lastChildUl = ul.lastElementChild
// console.log(lastChildUl.textContent);

// Exercise 4
// 1.Using the DOM, render the books inside an HTML table
// (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// const allBooks = [];

// const books1 = {
//     title: "Sarkozy",
//     author: "Nicolas Sarkozy",
//     image: "https://picsum.photos/200",
//     alreadyRead: false
// }
// const books2 = {
//     title: "Harry Potter",
//     author: "Bill gates",
//     image: "https://picsum.photos/250",
//     alreadyRead: true
// }
// const books3 = {
//     title: "1789",
//     author: "Johny Depp",
//     image: "https://picsum.photos/210",
//     alreadyRead: false
// }

// allBooks.push(books1, books2, books3)
// console.log(allBooks);


// let htmlString = "";
// for (const book of allBooks) {
//     console.log(book);
//     const rowString =
//         `
//     <tr class="${book.alreadyRead ? 'is-read' : ''}">
//         <td>${book.title} written by ${book.author}</td>
//         <td><img src="${book.image}"/></td>
//         <td>Already read ${book.alreadyRead}</td>
//     </tr>
// `
//     htmlString = htmlString + rowString
// }

// const table = document.createElement("table")
// table.innerHTML =
//     `
// <thead>
//     <tr>
//         <th colspan="3"> My books list</th>
//     </tr>
// </thead>

// <tbody>
// ${htmlString}
// </tbody>
// `
// const booksListDiv = document.querySelector(".list-books")
// booksListDiv.appendChild(table)

