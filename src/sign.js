const readlineSync = require("readline-sync");

const amount = Number(readlineSync.question("\nEnter a number: "));

if (!Number.isInteger(amount)) {
  console.log("\nInvalid.\n")

} else if (amount < (Number.MIN_SAFE_INTEGER)) {
  console.log("\nInvalid.\n")

} else if (amount > (Number.MAX_SAFE_INTEGER)) {
  console.log("\nInvalid.\n")

} else if (amount < 0) {
  console.log("\nNegative.\n")

} else if (amount == 0) {
  console.log("\nZero.\n")

} else if (amount > 0) {
  console.log("\nPositive.\n")

} else {
  console.log("\nInvalid.\n")

}
