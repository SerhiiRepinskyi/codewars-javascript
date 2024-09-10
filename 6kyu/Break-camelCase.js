// Break camelCase

// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTIONS:
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// 2
// function solution(string) {
//   return string
//     .split("")
//     .map((char) => (char === char.toUpperCase() ? " " + char : char))
//     .join("");
// }

// 3
// function solution(string) {
//   return string.split("").reduce((acc, char) => {
//     return acc + (char === char.toUpperCase() ? " " + char : char);
//   }, "");
// }

// EXAMPLES:
console.log(solution("camelCasing")); // "camel Casing"
console.log(solution("identifier")); // "identifier"
console.log(solution("")); // ""
