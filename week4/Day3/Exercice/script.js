// Exercise 1

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// // Using the map() method,
// // push into a new array the firstname of the user and a welcome message.

// const welcomeStudents = users.map((user) => `Hello ${user.firstName}`)
// console.log(welcomeStudents);

// // Using the filter() method,
// //  create a new array, containing only the Full Stack Residents.
// // Chain the filter method with a map method,
// // to return an array containing only the lastName of the Full Stack Residents.
// const FullStackResidents = users.filter((user) => user.role === "Full Stack Resident").map((user) => user.lastName)
// console.log(FullStackResidents);

// Exercise 2
// const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
// { name: "Liam", course: "Computer Science", isPassed: false },
// { name: "Jenner", course: "Information Technology", isPassed: true },
// { name: "Marco", course: "Robotics", isPassed: true },
// { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
// { name: "Jamie", course: "Big Data", isPassed: false }];

// // Using the filter() method, create a new array,
// // containing the students that passed the course.

// const studentPassedTheCourse = students.filter((student) => student.isPassed === true).forEach((student) => console.log(`Congratulation ${student.name} you passed ${student.course}`));
