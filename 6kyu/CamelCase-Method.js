// CamelCase Method

// DESCRIPTION:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" -- > "CamelCaseWord"

// Don't forget to rate this kata! Thanks :)

// SOLUTION:
String.prototype.camelCase = function () {
  return this.split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};

// EXAMPLES:
console.log("test case".camelCase()); // "TestCase"
console.log("camel Case method".camelCase()); // "CamelCaseMethod"
console.log("say hello".camelCase()); // "SayHello"
console.log("camel case word".camelCase()); // "CamelCaseWord"
console.log("".camelCase()); // ""
console.log(" multiple   spaces ".camelCase()); // "MultipleSpaces"
