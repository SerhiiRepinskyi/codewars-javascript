// Find the unique number

// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string (https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
// Find The Unique (https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)

// SOLUTIONS:
function findUniq(arr) {
  let normal;

  if (arr[0] === arr[1]) {
    normal = arr[0];
  } else if (arr[0] === arr[2]) {
    normal = arr[0];
  } else {
    normal = arr[1];
  }

  for (const num of arr) {
    if (num !== normal) return num;
  }
}

// 2
// function findUniq(arr) {
//   let normal = arr[0] === arr[1] ? arr[0] : arr[2] === arr[0] ? arr[2] : arr[1];
//   for (let num of arr) {
//     if (num !== normal) return num;
//   }
// }

// 3
// function findUniq(arr) {
//   return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// EXAMPLES:
console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
