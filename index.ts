#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter Student Name:",
    type: "string",
    name: "studentName",
  },
  { message: "Enter English Marks:", type: "number", name: "englishMarks" },
  { message: "Enter Science Marks:", type: "number", name: "scienceMarks" },
  { message: "Enter Maths Marks:", type: "number", name: "mathsMarks" },
]);
const totalMarks = 300;
const obtainedMarks =
  answer.englishMarks + answer.mathsMarks + answer.scienceMarks;
const percentage = (obtainedMarks / totalMarks) * 100;
console.log("-------------MARKSHEET--------------");
console.log("Student Name: ", answer.studentName.toUpperCase());
console.log("Obtained Marks: ", obtainedMarks);
console.log("Percentage: ", percentage);
//conditional for grade
if (percentage >= 80) {
  console.log("Grade:", "A+");
} else if (percentage >= 70) {
  console.log("Grade:", "A");
} else if (percentage >= 60) {
  console.log("Grade:", "B");
} else if (percentage >= 50) {
  console.log("Grade:", "C");
} else if (percentage >= 40) {
  console.log("Grade:", "D");
} else if (percentage < 40) {
  console.log("Grade:", "F");
}
console.log("--------------------------------------");
