// Daily  Challenge

// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”
let sentence = "This movie is not so bad !";
console.log(sentence);

// Create a variable called wordNot
// where it’s value is the first appearance
// of the substring “not”
let wordNot = sentence.search("not");
console.log(wordNot);

// Create a variable called wordBad where it’s value is the first appearance
//  of the substring “bad”
let wordbad = sentence.search("bad");
console.log(wordbad);

// If the word “bad” comes after the word “not”,
//  you should replace the whole “not…bad” substring 
// with “good”, then console.log the result.
// if == if there are not in the sentence and wordnot === -1 
if (wordNot === -1) {
    console.log(sentence);
} else if (wordNot < wordbad) {
    const firstPart = sentence.slice(0, wordNot)
    const finalPart = sentence.slice(wordbad + 3)
    console.log(`${firstPart}good ${finalPart}`);
} else {
    console.log(sentence);
};

