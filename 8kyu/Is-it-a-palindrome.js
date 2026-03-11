// Is it a palindrome?

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// SOLUTION:
function isPalindrome(x) {
  const str = x.toLowerCase();
  return str === str.split("").reverse().join("");
}

// EXAMPLES:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
