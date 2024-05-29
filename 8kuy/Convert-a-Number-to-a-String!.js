// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTIONS
function numberToString(num) {
  return num.toString();
}

// 2
// function numberToString(num) {
//   return String(num);
// }

//3
// function numberToString(num) {
//   return "" + num;
// }

// Examples
console.log(numberToString(123));
console.log(numberToString(999));
console.log(numberToString(-100));
