// Create N-dimensional array

// DESCRIPTION:
// Little boy Vasya was coding and was playing with arrays. He thought: "Is there any way to generate N-dimensional array"?
// Let us help little boy Vasya. Target of this Kata is to create a function, which will generate N-dimensional array. For simplicity all arrays will have the same length.

// Input:
// N: number -> depth of outter array, N > 0
// size: number -> length of all arrays, size > 0
// All inputs will be valid.
// On the last (deepest) level we should put a string wich will describe the depth of our array. Example: 'level 2'

// Example:
// for createNDimensionalArray(2,3) output should be:

// [
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
// ]

// for createNDimensionalArray(3,2) output should be:

// [
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
// ]

// Good luck!

// SOLUTIONS:
// 1
const createNDimensionalArray = (n, size) => {
  const build = (depth) => {
    if (depth === 1) {
      return Array(size).fill(`level ${n}`);
    }

    return Array.from({ length: size }, () => build(depth - 1));
  };

  return build(n);
};

// 2
// const createNDimensionalArray = (n, size, level = n) => {
//   if (n === 1) {
//     return Array(size).fill(`level ${level}`);
//   }

//   return Array.from({ length: size }, () =>
//     createNDimensionalArray(n - 1, size, level),
//   );
// };

// EXAMPLES:
console.log(createNDimensionalArray(1, 2));
// ["level 1", "level 1"];

console.log(createNDimensionalArray(1, 3));
// ["level 1", "level 1", "level 1"];

console.log(createNDimensionalArray(2, 2));
// [
//   ["level 2", "level 2"],
//   ["level 2", "level 2"],
// ];

console.log(createNDimensionalArray(2, 3));
// [
//   ["level 2", "level 2", "level 2"],
//   ["level 2", "level 2", "level 2"],
//   ["level 2", "level 2", "level 2"],
// ];

console.log(createNDimensionalArray(3, 1));
// [[["level 3"]]];

console.log(createNDimensionalArray(3, 2));
// [
//   [
//     ["level 3", "level 3"],
//     ["level 3", "level 3"],
//   ],
//   [
//     ["level 3", "level 3"],
//     ["level 3", "level 3"],
//   ],
// ];
