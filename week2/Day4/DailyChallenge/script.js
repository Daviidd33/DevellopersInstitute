// 1.Prompt the user for several words (separated by commas).
let answer = prompt("What is yours word ?");

// 2.Put the words into an array.
let words = answer.split(',');
// console.log(words)

// 3.Console.log the words one per line, in a rectangular frame as seen below.
let lenghtOfLongestWord = 0

words.forEach(word => {
    console.log(word)
    const wordLenght = word.length
    if (wordLenght > lenghtOfLongestWord) {
        lenghtOfLongestWord = wordLenght
    }
});
// 4.Check out the Hints and Requirements below.
// The number of stars that wraps the sentence
// must depend on the length of the longest word.