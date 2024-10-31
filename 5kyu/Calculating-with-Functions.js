// Calculating with Functions

// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// SOLUTION:
function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(n) {
  return function (x) {
    return x + n;
  };
}
function minus(n) {
  return function (x) {
    return x - n;
  };
}
function times(n) {
  return function (x) {
    return x * n;
  };
}
function dividedBy(n) {
  return function (x) {
    return Math.floor(x / n);
  };
}

// --- using arrow functions ---
// const zero = (fn) => (fn ? fn(0) : 0);
// const one = (fn) => (fn ? fn(1) : 1);
// const two = (fn) => (fn ? fn(2) : 2);
// const three = (fn) => (fn ? fn(3) : 3);
// const four = (fn) => (fn ? fn(4) : 4);
// const five = (fn) => (fn ? fn(5) : 5);
// const six = (fn) => (fn ? fn(6) : 6);
// const seven = (fn) => (fn ? fn(7) : 7);
// const eight = (fn) => (fn ? fn(8) : 8);
// const nine = (fn) => (fn ? fn(9) : 9);

// const plus = (n) => (x) => x + n;
// const minus = (n) => (x) => x - n;
// const times = (n) => (x) => x * n;
// const dividedBy = (n) => (x) => Math.floor(x / n);

// EXAMPLES:
console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
