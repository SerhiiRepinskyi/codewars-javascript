// Mexican Wave

// DESCRIPTION:
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position. The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced.

// (Wikipedia: https://en.wikipedia.org/wiki/Wave_(audience))

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

// Rules
// 1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [" S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

// Good luck and enjoy!

// SOLUTIONS:
// ======= Solution 1: Using map + filter (functional style) =======
function wave(str) {
  return [...str]
    .map((char, i) =>
      char === " "
        ? null
        : str.slice(0, i) + char.toUpperCase() + str.slice(i + 1)
    )
    .filter(Boolean);
}

// ======= Solution 2: Using forEach =======
// function wave(str) {
//   let result = [];

//   [...str].forEach((char, i) => {
//     if (char !== " ") {
//       let waveStr = str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
//       result.push(waveStr);
//     }
//   });

//   return result;
// }

// ======= Solution 3: Using for loop =======
// function wave(str) {
//   const result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;

//     const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//     result.push(waveStr);
//   }

//   return result;
// }

// EXAMPLES:
console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave(" s p a c e s ")); // [" S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("")); // []
console.log(wave("two words")); //
console.log(wave("")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]
