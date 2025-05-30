// The Hashtag Generator

// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// SOLUTIONS:
function generateHashtag(str) {
  const words = str
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  const result = "#" + words.join("");

  return result.length === 1 || result.length > 140 ? false : result;
}

// 2
// function generateHashtag(str) {
//   const result = str
//     .split(" ")
//     .filter((word) => word !== "")
//     .reduce(
//       (hashtag, word) => hashtag + word[0].toUpperCase() + word.slice(1),
//       "#"
//     );

//   return result.length === 1 || result.length > 140 ? false : result;
// }

// EXAMPLES:
console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   ")); // "#HelloWorld"
console.log(generateHashtag("")); // false
