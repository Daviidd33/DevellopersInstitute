// Exercise 1

// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


// async function getStarshipData() {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/")
//     // console.log(response);
//     const data = await response.json()
//     console.log(data.result);

// }
// getStarshipData()