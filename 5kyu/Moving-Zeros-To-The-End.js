// Moving Zeros To The End

// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// SOLUTION:
function moveZeros(arr) {
  return arr
    .filter((item) => item !== 0)
    .concat(arr.filter((item) => item === 0));
}

// EXAMPLES:
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); //  [false, 1, 1, 2, 1, 3, 'a', 0, 0]
