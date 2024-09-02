// Unique In Order

// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// SOLUTIONS:
const uniqueInOrder = function (iterable) {
  return [...iterable].filter((el, i) => el !== iterable[i - 1]);
  // === OR ===
  // return [...iterable].filter((el, i, itr) => el !== itr[i - 1]);
};

// 2
// const uniqueInOrder = function (iterable) {
//   const result = [];

//   if (typeof iterable === "string") {
//     iterable = iterable.split("");
//   }

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i - 1]) {
//       result.push(iterable[i]);
//     }
//   }

//   // === OR ===
//   //   iterable.forEach((el) => {
//   //     if (result[result.length - 1] !== el) {
//   //       result.push(el);
//   //     }
//   //   });

//   return result;
// };

// EXAMPLES:
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
