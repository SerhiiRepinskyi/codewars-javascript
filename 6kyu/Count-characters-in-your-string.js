// Count characters in your string

// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTIONS:
function count(string) {
  const countObj = {};

  string.split("").forEach((s) => {
    countObj[s] ? countObj[s]++ : (countObj[s] = 1);
  });

  return countObj;
}

// 2
// function count(string) {
//   const countObj = {};

//   for (let char of string) {
//     countObj[char] = (countObj[char] || 0) + 1;
//   }

//   return countObj;
// }

// EXAMPLES:
console.log(count("aba")); // {"a": 2, "b": 1}
console.log(count("hello")); // {"h": 1, "e": 1, "l": 2, "o": 1}
console.log(count("")); // {}
