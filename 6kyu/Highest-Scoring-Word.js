// Highest Scoring Word

// DESCRIPTION:

// SOLUTIONS:
// 1
function high(x) {
  const words = x.split(" ");

  let bestWord = "";
  let bestScore = 0;

  for (const word of words) {
    const score = [...word].reduce((sum, char) => {
      return sum + (char.charCodeAt(0) - 96); // 'a' (97) -> 1, 'b' (98) -> 2
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestWord = word;
    }
  }

  return bestWord;
}

// 2
// function high(x) {
//   return x
//     .split(" ")
//     .sort(
//       (a, b) =>
//         [...b].reduce((s, c) => s + c.charCodeAt(0) - 96, 0) -
//         [...a].reduce((s, c) => s + c.charCodeAt(0) - 96, 0)
//     )[0];
// }

// EXAMPLES:
console.log(high("man i need a taxi up to ubud")); // taxi
console.log(high("what time are we climbing up the volcano")); // volcano
console.log(high("take me to semynak")); // semynak
console.log(high("aa b")); // aa
console.log(high("b aa")); // b
console.log(high("bb d")); // bb
console.log(high("d bb")); // d
console.log(high("aaa b")); // aaa
