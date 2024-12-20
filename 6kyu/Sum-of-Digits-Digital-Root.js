// Sum of Digits / Digital Root

// DESCRIPTION:
// Digital root (https://en.wikipedia.org/wiki/Digital_root) is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// SOLUTIONS:
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  const sum = n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + +digit, 0);

  return digitalRoot(sum);
}

// 2
// function digitalRoot(n) {
//   while (n >= 10) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((acc, digit) => acc + +digit, 0);
//   }

//   return n;
// }

// 3
// function digitalRoot(n) {
//   return n === 0 ? 0 : 1 + ((n - 1) % 9);
// }

// EXAMPLES:
console.log(digitalRoot(1)); // 1
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2
