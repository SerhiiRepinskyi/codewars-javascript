// Exes and Ohs

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// SOLUTIONS:
function XO(str) {
  const xCount = str
    .toLowerCase()
    .split("")
    .filter((ch) => ch === "x").length;

  const oCount = str
    .toLowerCase()
    .split("")
    .filter((ch) => ch === "o").length;

  return xCount === oCount;
}

// 2
// function XO(str) {
//   const x = str.match(/x/gi);
//   const o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// 3
// function XO(str) {
//   let xCount = 0;
//   let oCount = 0;

//   for (const ch of str.toLowerCase()) {
//     if (ch === "x") xCount++;
//     if (ch === "o") oCount++;
//   }

//   return xCount === oCount;
// }

// EXAMPLES:
console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false
