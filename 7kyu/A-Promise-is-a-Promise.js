// A Promise is a Promise

// DESCRIPTION:
// Create a resolved javascript Promise that will return 'Hello World!'.

// SOLUTION:
function promiseHelloWorld() {
  return Promise.resolve("Hello World!");
}

// EXAMPLE:
promiseHelloWorld().then(console.log); // Hello World!
