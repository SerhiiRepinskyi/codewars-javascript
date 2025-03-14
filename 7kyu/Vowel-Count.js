// Vowel Count

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// SOLUTION:
function getCount(str) {
  let vowels = "aeiou";
  return [...str].filter((char) => vowels.includes(char)).length;
}

// 2
// function getCount(str) {
//   return (str.match(/[aeiou]/g) || []).length;
// }

// EXAMPLES:
console.log(getCount("abracadabra")); // 5
