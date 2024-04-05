function isAnagram(sentence1, sentence2) {
    const string1 = sentence1.toLowerCase().split(" ").join("")
    const string2 = sentence2.toLowerCase().split(" ").join("")

    if (string1.length != string2.length) return false;

    const total = {}
    for (const letter of string1) {
        total[letter] = total[letter] + 1 || 1;
    }

    for (const letter of string2) {
        total[letter] = total[letter] ? total[letter] - 1 : - 1;
    }
    console.log(total);
}

const result1 = isAnagram("azdlowaazz", "azdowbazzl")//true
console.log(result1);
