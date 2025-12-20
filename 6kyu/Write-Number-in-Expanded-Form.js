// Write Number in Expanded Form

// DESCRIPTION:
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//    12 --> "10 + 2"
//    45 --> "40 + 5"
//    70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.
// If you liked this kata, check out part 2 (https://www.codewars.com/kata/write-number-in-expanded-form-part-2)!!

// SOLUTIONS:
// 1
// function expandedForm(num) {
//   const digits = num.toString();
//   const result = [];

//   for (let i = 0; i < digits.length; i++) {
//     if (digits[i] !== "0") {
//       result.push(digits[i] + "0".repeat(digits.length - i - 1));
//     }
//   }

//   return result.join(" + ");
// }

// 2
function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, i, arr) => digit + "0".repeat(arr.length - i - 1))
    .filter((value) => value[0] !== "0")
    .join(" + ");
}

// EXAMPLES:
console.log(expandedForm(12)); // "10 + 2"
console.log(expandedForm(45)); // "40 + 5"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
