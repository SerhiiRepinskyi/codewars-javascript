// Simple Pig Latin

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTIONS:
function pigIt(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + "ay");
}

// 2
// function pigIt(str) {
//   return str
//     .split(" ")
//     .map((word) =>
//       /^[a-zA-Z]+$/.test(word) ? word.slice(1) + word[0] + "ay" : word
//     )
//     .join(" ");
// }

// EXAMPLES:
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
console.log(pigIt("This is my string")); // hisTay siay ymay tringsay
