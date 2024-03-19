const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
//1. Create an array using forEach that contains all the usernames from the gameInfo array,
// add an exclamation point (ie. “!”) to the end of every username.

// const usernames = getUsernamesFromArray(gameInfo)
// console.log(usernames);

// function getUsernamesFromArray(users) {
//     const userNames = [];
//     for (const user of users) {
//         userNames.push(user.username + " !")
//     }
//     return userNames;
// }

// With Map() methode
// const usernames = gameInfo.map((user) => user.username + " !")
// console.log(usernames);

// With foreach methode

// 2.Create an array using forEach that contains the usernames of all players
// with a score bigger than 5.
// const usernames = gameInfo.filter((user) => user.score > 5);
// // console.log(usernames.map((users) => users.username));

// const gamerMorefive = usernames.map((users) => users.username)
// console.log(gamerMorefive);


