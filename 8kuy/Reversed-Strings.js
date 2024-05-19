// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTIONS
const solution = (str) => str.split("").reverse().join("");

// 2
// const solution = (s) => [...s].reverse().join("");

// Examples
console.log(solution("world")); // dlrow
console.log(solution("word")); // drow
