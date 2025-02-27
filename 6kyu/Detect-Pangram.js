// Detect Pangram

// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// SOLUTIONS:
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((letter) => string.toLowerCase().includes(letter));
}

// 2
// function isPangram(string) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const lowerCased = string.toLowerCase();

//   for (const letter of alphabet) {
//     if (!lowerCased.includes(letter)) {
//       return false;
//     }
//   }

//   return true;
// }

// 3
// function isPangram(string) {
//   const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
//   const lettersInString = new Set(
//     string.toLowerCase().replace(/[^a-z]/g, "") // залишаємо лише літери
//   );
//   return [...alphabetSet].every((letter) => lettersInString.has(letter));
// }

// EXAMPLES:
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false
