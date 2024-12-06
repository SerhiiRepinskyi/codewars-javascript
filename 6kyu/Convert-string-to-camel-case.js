// Convert string to camel case

// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// SOLUTIONS:
function toCamelCase(str) {
  if (!str) return "";

  const words = str.split(/[-_]/);

  return words
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// 2
// function toCamelCase(str) {
//   let regExp = /[-_]\w/gi;
//   return str.replace(regExp, function (match) {
//     return match.charAt(1).toUpperCase();
//   });
// }

// EXAMPLES:
console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
console.log(toCamelCase("The_Stealth-Warrior")); // TheStealthWarrior
