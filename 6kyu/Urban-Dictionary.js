// Urban Dictionary

// DESCRIPTION:
// Design a data structure that supports the following two operations:

// addWord / add_word which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter. Return true if the search term fully matches any word previously added; otherwise, return false.
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true

// Note: the data structure will be initialized multiple times during the tests!

// SOLUTIONS:
// 1
class WordDictionary {
  constructor() {
    this.dictionary = [];
  }

  addWord(word) {
    this.dictionary.push(word);
  }

  search(pattern) {
    return this.dictionary.some((dictionaryWord) => {
      if (dictionaryWord.length !== pattern.length) {
        return false;
      }

      for (let i = 0; i < dictionaryWord.length; i++) {
        if (pattern[i] !== "." && pattern[i] !== dictionaryWord[i]) {
          return false;
        }
      }

      return true;
    });
  }
}

// 2
// class WordDictionary {
//   constructor() {
//     this.dictionary = [];
//   }

//   addWord(word) {
//     this.dictionary.push(word);
//   }

//   search(pattern) {
//     const regex = new RegExp(`^${pattern}$`);

//     return this.dictionary.some((dictionaryWord) => regex.test(dictionaryWord));
//   }
// }

// EXAMPLES:
const wd = new WordDictionary();
wd.addWord("a");
wd.addWord("at");
wd.addWord("ate");
wd.addWord("ear");
console.log(wd.search("a")); // true
console.log(wd.search("a.")); // true
console.log(wd.search("a.e")); // true
console.log(wd.search("b")); // false
console.log(wd.search("e.")); // false
console.log(wd.search("ea.")); // true
console.log(wd.search("ea..")); // false
console.log("-----------------------------");
wd.addWord("co");
wd.addWord("cod");
wd.addWord("code");
wd.addWord("codewars");
console.log(wd.search("........")); // true
console.log(wd.search("c.o")); // false
console.log(wd.search("cod.")); // true
console.log(wd.search("c.o")); // false
console.log(wd.search("co..w..s")); // true
console.log(wd.search("co..w..")); // false
