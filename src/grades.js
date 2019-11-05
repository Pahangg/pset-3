const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const higha= 100;
const lowa= 90;
const highb= 89;
const lowb= 80;
const highc= 79;
const lowc= 70;
const highd= 69;
const lowd= 60;
const highf= 59;
const lowf= 0;

if (grade > 100 || grade < 0) {

      console.log("\nInvalid.\n")

} else if (grade >= lowa && grade <= higha) {

      console.log("\nYou received an A.\n")

} else if (grade >= lowb && grade < lowa) {

      console.log("\nYou received a B.\n")

} else if (grade >= lowc && grade < lowb) {

      console.log("\nYou received a C.\n")

} else if (grade >= lowd && grade < lowc) {

      console.log("\nYou received a D.\n")

} else if (grade >= lowf && grade < lowd) {

      console.log("\nYou received an F.\n")

} else {

      console.log("\nInvalid.\n")

}
