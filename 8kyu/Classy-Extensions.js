// Classy Extensions

// DESCRIPTION:

// The goal of this kata is to train the basic OOP concepts of inheritance and method overriding.

// You will be preloaded with the Animal class, so you should only edit the Cat class.

// Task
// Your task is to complete the Cat class which extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is accessible in the class with this.name.

// Reference: MDN docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

// Simulated preloaded Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

// SOLUTION:
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

// EXAMPLES:
let cat = new Cat("Mr Whiskers");
console.log(cat.speak()); // "Mr Whiskers meows."

cat = new Cat("Lamp");
console.log(cat.speak()); // "Lamp meows."

cat = new Cat("$$Money Bags$$");
console.log(cat.speak()); // "$$Money Bags$$ meows."
