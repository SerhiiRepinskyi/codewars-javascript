// Disemvowel Trolls

// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// SOLUTIONS:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
// replace — глобально (g) замінює всі знайдені голосні на порожній рядок "" (i — ігнорування регістру)

// 2
// function disemvowel(str) {
//   return str
//     .split("")
//     .filter(
//       (item) =>
//         item.toLowerCase() !== "a" &&
//         item.toLowerCase() !== "e" &&
//         item.toLowerCase() !== "i" &&
//         item.toLowerCase() !== "o" &&
//         item.toLowerCase() !== "u"
//     )
//     .join("");
// }

// Examples
console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
