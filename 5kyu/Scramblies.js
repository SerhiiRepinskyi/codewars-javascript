// Scramblies

// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// SOLUTIONS:
function scramble(str1, str2) {
  const count = {};

  for (const char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}

// 2
// function scramble(str1, str2) {
//   const letterCounts = str1.split("").reduce((counts, letter) => {
//     counts[letter] = (counts[letter] || 0) + 1;
//     return counts;
//   }, {});

//   return str2.split("").every((letter) => --letterCounts[letter] >= 0);
// }

// EXAMPLES:
console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false

console.log(scramble("scriptjavx", "javascript")); // false
console.log(scramble("scriptingjava", "javascript")); // true
console.log(scramble("scriptsjava", "javascripts")); // true
console.log(scramble("javscripts", "javascript")); // false
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("aabbcamaomsccdd", "commas")); // true
console.log(scramble("commas", "commas")); // true
console.log(scramble("sammoc", "commas")); // true
