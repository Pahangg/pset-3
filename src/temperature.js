const readlineSync = require("readline-sync");

const theTemperature = Number(readlineSync.question("\nEnter a temperature: "));
const theScale = String(readlineSync.question("Enter a scale: "))

const fFreezingPoint = 32;
const fBoilingPoint = 212;
const cFreezingPoint = 0;
const cBoilingPoint = 100;
const kFreezingPoint = 273;
const kBoilingPoint = 373;


if (theTemperature < (Number.MIN_SAFE_INTEGER) || theTemperature > Number.MAX_SAFE_INTEGER) {

      console.log("\nInvalid.\n")

} else if (theTemperature <= fFreezingPoint && (theScale == "F" || theScale == "f")){

      console.log("\nSolid.\n")

} else if ((theTemperature > fFreezingPoint && theTemperature < fBoilingPoint) && (theScale == "F" || theScale == "f")){

      console.log("\nLiquid.\n")

} else if (theTemperature >= fBoilingPoint && (theScale == "F" || theScale == "f")){

      console.log("\nGas.\n")

} else if (theTemperature <= cFreezingPoint && (theScale == "C" || theScale == "c")){

      console.log("\nSolid.\n")

} else if ((theTemperature > cFreezingPoint && theTemperature < cBoilingPoint) && (theScale == "C" || theScale == "c")){

      console.log("\nLiquid.\n")

} else if (theTemperature >= cBoilingPoint && (theScale == "C" || theScale == "c")){

      console.log("\nGas.\n")

} else if (theTemperature <= kFreezingPoint && (theScale == "K" || theScale == "k")){

      console.log("\nSolid.\n")

} else if ((theTemperature > kFreezingPoint && theTemperature < kBoilingPoint) && (theScale == "K" || theScale == "k")){

      console.log("\nLiquid.\n")

} else if (theTemperature >= kBoilingPoint && (theScale == "K" || theScale == "k")){

      console.log("\nGas.\n")

} else {

      console.log("\nInvalid.\n")
}
