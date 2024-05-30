// Complementary DNA

// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// SOLUTIONS
function dnaStrand(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna.replace(/./g, (c) => complements[c]);
}
// Регулярний вираз "/./g":
// "." - означає "будь-який символ";
// g - означає "глобальний", тобто замінювати всі входження.

// 2
// function dnaStrand(dna) {
//   const complements = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   return dna
//     .split("")
//     .map((e) => complements[e])
//     .join("");
// }

// Examples
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
