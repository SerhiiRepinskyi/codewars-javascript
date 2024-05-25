// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTIONS
const reverseWords = (str) =>
  str.split("").reverse().join("").split(" ").reverse().join(" ");

// 2
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map(function (word) {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }

// Examples
console.log(reverseWords("This is an example!")); // sihT si na !elpmaxe
console.log(reverseWords("double  spaces")); // elbuod  secaps
