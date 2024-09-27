// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// DESCRIPTION:
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2

// The next number in having this property is 135:
// See this property again: 135 = 1^1 + 3^2 + 5^3

// TASK
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a, b] the function should output an empty list.
// 90, 100 --> []

// Enjoy it!!

// SOLUTION:
function sumDigPow(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    const digits = String(i).split("").map(Number);

    let sum = digits.reduce(
      (acc, digit, index) => acc + Math.pow(digit, index + 1),
      0
    );

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}

// EXAMPLES:
console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(90, 100)); // []
