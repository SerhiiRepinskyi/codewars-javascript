// Shortest Word

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION:
// 1
function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}

// 2
// function findShort(s) {
//   let shortestWordLength = Infinity;
//   const words = s.split(" ").map((word) => {
//     if (word.length < shortestWordLength) {
//       shortestWordLength = word.length;
//     }
//     return word.length;
//   });

//   return shortestWordLength;
// }

// EXAMPLES:
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones",
  ),
); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
