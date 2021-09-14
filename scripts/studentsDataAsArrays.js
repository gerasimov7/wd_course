// store students data as array of arrays:
let students = [
    ["male", 24, "Ivan", "Ivanov"],
    ["female", 22, "Maria", "Petrova"],
    ["male", 18, "Georgi", "Georgiev"],
    ["male", 21, "Nikolai", "Nikolov"]
];

////////////////////  TASK  ////////////////////
// print in console the oldest student names:  /
////////////////////////////////////////////////
// your code goes here:
let row = students.length;
let cols = students[0].length;
let oldestStudentAge = 0;
let oldestStudentFirstName;
let oldestStudentLastName;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
        let current = students[i][j];
        if (typeof current === 'number' && current > oldestStudentAge) {
            oldestStudentAge = current;
            oldestStudentFirstName = students[i][j + 1];
            oldestStudentLastName = students[i][j + 2];
        }
    }
}

console.log(`The oldest student is ${oldestStudentFirstName} ${oldestStudentLastName}. He is ${oldestStudentAge} years old.`)
// Expexted output:
//The oldest student is Ivan Ivanov. He is 24 years old.