// Convert number to reversed array of digits

// DESCRIPTION:
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// SOLUTIONS
function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

// Examples
console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(0)); // [0]
