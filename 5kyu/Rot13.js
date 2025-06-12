// Rot13

// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// SOLUTIONS:
function rot13(message) {
  return message.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= "Z" ? 65 : 97; // Визначаємо: велика (A-Z) або мала (a-z)
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

// 2
// function rot13(message) {
//   let result = "";

//   for (let i = 0; i < message.length; i++) {
//     let char = message[i];
//     let code = message.charCodeAt(i);

//     if (code >= 65 && code <= 90) {
//       // Велика літера (A-Z)
//       result += String.fromCharCode(((code - 65 + 13) % 26) + 65);
//     } else if (code >= 97 && code <= 122) {
//       // Мала літера (a-z)
//       result += String.fromCharCode(((code - 97 + 13) % 26) + 97);
//     } else {
//       // Інші символи без змін
//       result += char;
//     }
//   }

//   return result;
// }

// 3
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
//   return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
// }

// 4
// function rot13(message) {
//   return message.replace(/[a-z]/gi, (letter) =>
//     String.fromCharCode(
//       letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
//     )
//   );
// }

// EXAMPLES:
console.log(rot13("test")); // "grfg"
console.log(rot13("Test")); // "Grfg"
