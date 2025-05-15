// Not very secure

// DESCRIPTION:
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// SOLUTIONS:
function alphanumeric(string) {
  if (string.length === 0) return false;

  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    const isDigit = code >= 48 && code <= 57; // '0' - '9'
    const isUpper = code >= 65 && code <= 90; // 'A' - 'Z'
    const isLower = code >= 97 && code <= 122; // 'a' - 'z'

    if (!isDigit && !isUpper && !isLower) {
      return false;
    }
  }

  return true;
}

// 2
// function alphanumeric(string) {
//   return /^[a-z0-9]+$/i.test(string);
// }

// EXAMPLES:
console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
