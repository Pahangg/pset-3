const readlineSync = require("readline-sync");

const lgrade = String(readlineSync.question("\nEnter a letter grade: "));


if ( lgrade == "A+" || lgrade == "A" || lgrade == "a+" || lgrade == "a") {

      console.log("\nYour GPA is 4.00.\n")



} else if  (lgrade == "A-" || lgrade == "a-") {

      console.log("\nYour GPA is 3.67.\n")



} else if  (lgrade == "B+" || lgrade == "b+") {

      console.log("\nYour GPA is 3.33.\n")



} else if  (lgrade == "B"  || lgrade == "b") {

      console.log("\nYour GPA is 3.00.\n")



} else if  (lgrade == "B-" || lgrade == "b-") {

      console.log("\nYour GPA is 2.67.\n")



} else if  (lgrade == "C+" || lgrade == "c+") {

      console.log("\nYour GPA is 2.33.\n")



} else if  (lgrade == "C"  || lgrade == "c") {

      console.log("\nYour GPA is 2.00.\n")



} else if  (lgrade == "C-" || lgrade == "c-") {

      console.log("\nYour GPA is 1.67.\n")



} else if  (lgrade == "D+" || lgrade == "d+") {

      console.log("\nYour GPA is 1.33.\n")



} else if  (grade == "D"  || grade == "d") {

      console.log("\nYour GPA is 1.00.\n")



} else if  (grade == "D-" || grade == "d-") {

      console.log("\nYour GPA is 0.67.\n")



} else if  (grade == "F"  || grade == "f") {

      console.log("\nYour GPA is 0.00.\n")



} else {

      console.log("\nInvalid.\n")

}
