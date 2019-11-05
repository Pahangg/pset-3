const readlineSync = require("readline-sync");

const firstnum= Number(readlineSync.question("\nEnter three numbers.\n\n"));
const secondnum= Number(readlineSync.question(""));
const thirdnum = Number(readlineSync.question(""));

if (firstnum, secondnum, thirdnum < (Number.MIN_SAFE_INTEGER) || firstnum, secondnum, thirdnum > Number.MAX_SAFE_INTEGER) {

   console.log("\nInvalid.\n")

} else if (firstnum == secondnum && secondnum == thirdnum) {

    console.log("\nEqual.\n")

} else if (firstnum < secondnum && secondnum < thirdnum) {

    console.log("\nStrictly increasing.\n")

} else if (firstnum > secondnum && secondnum > thirdnum) {

    console.log("\nStrictly decreasing.\n")

} else if (firstnum >= secondnum && secondnum >= thirdnum) {

    console.log("\nIncreasing.\n")

} else if (firstnum <= secondnum && secondnum <= thirdnum) {

    console.log("\nDecreasing.\n")

 } else if ((firstnum >= secondnum && secondnum <= thirdnum) || (firstnum <= secondnum && secondnum >= thirdnum)) {

      console.log("\nUnordered.\n")

} else {

  console.log("\nInvalid.\n")
}
