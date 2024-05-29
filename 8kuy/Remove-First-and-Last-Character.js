// DESCRIPTION:
// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// SOLUTIONS
function removeChar(str) {
  return str.slice(1, -1);
}

// Examples
console.log(removeChar("Hello, world!")); // ello, world
