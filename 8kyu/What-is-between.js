// What is between?

// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// SOLUTION:
function between(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

// EXAMPLES:
console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]
