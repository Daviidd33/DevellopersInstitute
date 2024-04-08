// Exercise 1
// Create a program to retrieve the data from the API URL provided above.
//  Use XMLHttpRequest object to make an AJAX request to the Giphy API
//  and console.log the Javascript Object.

// let xhr = new XMLHttpRequest();
// xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
// xhr.responseType = 'json'
// xhr.send();

// xhr.onload = function () {
//     if (xhr.status != 200) { // analyze HTTP status of the response
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//     } else { // show the result
//         // console.log(xhr.response.data); // response is the server
//         const data = xhr.response.data
//         console.log(data);
//     }

// };

// Exercise 2
// Using this part of the documention,
// retrieve 10 gifs about the “sun”.
// The starting position of the results should be 2.
// Console.log the Javascript Object

// let xhr = new XMLHttpRequest();
// xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10");
// xhr.responseType = 'json'
// xhr.send();

// xhr.onload = function () {
//     if (xhr.status != 200) { // analyze HTTP status of the response
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//     } else { // show the result
//         // console.log(xhr.response.data); // response is the server
//         const data = xhr.response.data
//         console.log(data);
//     }

// };
