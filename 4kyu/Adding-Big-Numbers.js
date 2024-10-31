// Adding Big Numbers

// DESCRIPTION:
// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// - The input numbers are big.
// - The input is a string of only digits.
// - The numbers are positives.

// SOLUTION:
function add(a, b) {
  // return (Number(a) + Number(b)).toString(); // Fix me!

  let carry = 0;
  let result = "";

  let maxLength = Math.max(a.length, b.length);

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

// EXAMPLES:
console.log(add("123", "321")); // "444"
console.log(add("11", "99")); // "110"
console.log(add("1372", "69")); // "1441"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963"



