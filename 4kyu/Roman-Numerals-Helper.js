// Roman Numerals Helper

// DESCRIPTION:
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// - 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// - 2008 is written as 2000=MM, 8=VIII; or MMVIII
// - 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000
// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1

// Help
// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

// SOLUTION:
class RomanNumerals {
  static toRoman(num) {
    const romanMap = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];

    let result = "";

    for (const { value, symbol } of romanMap) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    return result;
  }

  static fromRoman(str) {
    const romanMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let i = 0;
    let result = 0;

    while (i < str.length) {
      const twoChar = str.slice(i, i + 2);
      if (romanMap[twoChar]) {
        result += romanMap[twoChar];
        i += 2;
      } else {
        result += romanMap[str[i]];
        i += 1;
      }
    }

    return result;
  }
}

// EXAMPLES:
console.log(RomanNumerals.toRoman(2000)); // "MM"
console.log(RomanNumerals.toRoman(1666)); // "MDCLXVI"
console.log(RomanNumerals.toRoman(86)); // "LXXXVI"
console.log(RomanNumerals.toRoman(1)); // "I"
console.log(RomanNumerals.toRoman(2024)); // "MMXXIV"

console.log("================");

console.log(RomanNumerals.fromRoman("MM")); // 2000
console.log(RomanNumerals.fromRoman("MDCLXVI")); // 1666
console.log(RomanNumerals.fromRoman("LXXXVI")); // 86
console.log(RomanNumerals.fromRoman("I")); // 1
console.log(RomanNumerals.fromRoman("MMXXIV")); // 2024
