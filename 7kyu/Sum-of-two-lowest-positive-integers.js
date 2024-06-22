// Sum of two lowest positive integers

// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// SOLUTIONS:
function sumTwoSmallestNumbers(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

// 2
// function sumTwoSmallestNumbers(numbers) {
//   const [a, b] = [...numbers].sort((a, b) => a - b);
//   return a + b;
// }

// EXAMPLES:
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455
