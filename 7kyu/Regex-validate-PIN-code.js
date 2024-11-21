// Regex validate PIN code

// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTIONS:
function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}

// 2
// function validatePIN(pin) {
//   if (
//     (pin.length === 4 || pin.length === 6) &&
//     [...pin].every((char) => char >= "0" && char <= "9")
//   ) {
//     return true;
//   }

//   return false;
// }

// EXAMPLES:
console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false
