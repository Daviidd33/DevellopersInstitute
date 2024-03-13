// Exercise 1
// 1.In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2.The function will alert “Hello World”

// function helloWorld() {
//     alert("hello World !")
// }

// setTimeout(helloWorld, 2000)

// 3.In your Javascript file, using setTimeout, call a function after 2 seconds.
// 4.The function will add a new paragraph <p>Hello World</p>
// to the <div id="container">.

// const div = document.getElementById("container")
// console.log(div);

// const para = () => {
//     const para = document.createElement("p")
//     para.textContent = "hello wolrd"
//     div.appendChild(para)
// }

// setTimeout(para, 3000)

// 5.In your Javascript file, using setInterval, call a function every 2 seconds.
// 6.The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 7.The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 8.Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
// as soon as there will be 5 paragraphs inside the <div id="container">.

// const div = document.getElementById("container");
// const button = document.getElementById("clear");
// let interval = setInterval(newPara, 1000);

// // button.addEventListener("click", clear);

// function newPara() {
//     const para = document.createElement("p");
//     para.textContent = "hello wolrd";

//     if (div.children.length == 5) {
//         clear()
//     } else {
//         div.appendChild(para);
//     }
// }

// function clear() {
//     clearInterval(interval)
// };

