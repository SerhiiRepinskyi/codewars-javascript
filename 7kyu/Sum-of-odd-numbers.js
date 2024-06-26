// Sum of odd numbers

// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// SOLUTIONS:
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// 2
// function rowSumOddNumbers(n) {
//   const firstNumber = n * (n - 1) + 1;
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += firstNumber + i * 2;
//   }

//   return sum;
// }

// Examples
console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(3)); // 27
