// Exercise 1

// Part 1
// Store your favorite food into a variable.

let food = "chocolate";

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

let meal = "dinner";

// Console.log I eat <favorite food> at every <favorite meal>
console.log(`I eat ${food} at every ${meal}`)

// Exercise 2

// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = ["black-mirror", "money heist", "and the big bang theory"]

console.log(`i watched 3 series ${myWatchedSeriesSentence[0]} ${myWatchedSeriesSentence[1]} ${myWatchedSeriesSentence[2]} `);

// Part 2

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
const myWatchedSeries1 = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries1.indexOf("the big bang theory"));
myWatchedSeries1.splice(2, 1, "friends")
console.log(myWatchedSeries1);

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries1.push("GOT");
console.log(myWatchedSeries1);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries1.unshift("hello")
console.log(myWatchedSeries1);

// Delete the series “black mirror”.
myWatchedSeries1.splice(1, 1)
console.log(myWatchedSeries1);

// Console.log the third letter of the series “money heist”.
let word = myWatchedSeries1[1]
console.log(word);

const letter = Array.from(word)
// ou 
const letter2 = [...word]

console.log(letter[2]);
console.log(letter2[2]);

// Exercise 3

// Store a celsius temperature into a variable.
const celsiu = 30;
const fareinheit = celsiu * 9 / 5 + 32;
console.log(`${celsiu}°C is ${fareinheit}°F.`);

