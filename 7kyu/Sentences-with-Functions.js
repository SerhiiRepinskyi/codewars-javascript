// Sentences with Functions

// DESCRIPTION:
// Implement all required functions in order to create the following sentences by calling those functions:

// Adam(has(a(dog()))); // must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

// SOLUTIONS:

// 1
// function Adam(str = "") {
//   return "Adam" + (str ? " " + str : ".");
// }
// function has(str = "") {
//   return "has " + str;
// }
// function a(str = "") {
//   return "a " + str;
// }
// function dog(str = "") {
//   return "dog" + (str ? " " + str : ".");
// }

// function The(str = "") {
//   return "The " + str;
// }
// function name(str = "") {
//   return "name " + str;
// }
// function of(str = "") {
//   return "of " + str;
// }
// function the(str = "") {
//   return "the " + str;
// }
// function is(str = "") {
//   return "is " + str;
// }
// function also(str = "") {
//   return "also " + str;
// }

// 2
const append = (word) => (str) => word + (str ? " " + str : ".");

const Adam = append("Adam");
const has = append("has");
const a = append("a");
const dog = append("dog");

const The = append("The");
const name = append("name");
const of = append("of");
const the = append("the");
const is = append("is");
const also = append("also");

// EXAMPLES:
console.log(Adam(has(a(dog())))); // Adam has a dog.
console.log(The(name(of(the(dog(is(also(Adam())))))))); // The name of the dog is also Adam.
