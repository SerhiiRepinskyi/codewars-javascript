// Find the odd int

// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// SOLUTIONS:
// Using XOR ("exclusive OR") operator ("^")
// XOR compares the bits of two numbers:
// - Returns 1 if the bits are different
// - Returns 0 if the bits are the same
// This operation effectively cancels out pairs of identical numbers, leaving only the number that appears an odd number of times.
function findOdd(A) {
  return A.reduce((acc, num) => acc ^ num, 0);
}

// 2
// function findOdd(A) {
//   for (let i = 0; i < A.length; i++) {
//     const count = A.filter((num) => num === A[i]).length;
//     if (count % 2 !== 0) {
//       return A[i];
//     }
//   }
//   return 0;
// }

// EXAMPLES:
console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
