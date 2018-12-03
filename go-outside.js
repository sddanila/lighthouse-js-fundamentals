// RAIN AND COLD - SEPARATE IF STATEMENTS
// var raining = true;
// var cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }
// if (cold) {
//   console.log("Make sure you pick up your scarf!");
// }
// console.log ("Now you're ready to go outside!");


// COLD ONLY - IF AND ELSE TOGETHER
// var cold = false;
// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// } else {
//   console.log("Short sleeves are fine.")
// }

// MORE EXACT IF STATEMENTS WITH IF ELSE
var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");