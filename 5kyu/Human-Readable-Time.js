// Human Readable Time

// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// SOLUTIONS:
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  const format = (num) => String(num).padStart(2, "0");

  return `${format(hours)}:${format(minutes)}:${format(sec)}`;

  // --- without "format" function ---
  // return [hours, minutes, sec]
  //   .map((num) => String(num).padStart(2, "0"))
  //   .join(":");
}

// 2
// function humanReadable(seconds) {
//   const hours = parseInt(seconds / 3600);
//   const minutes = parseInt((seconds / 60) % 60);
//   const sec = seconds % 60;

//   const format = (num) => (num < 10 ? "0" + num : num);

//   return format(hours) + ":" + format(minutes) + ":" + format(sec);
// }

// 3
// function humanReadable(seconds) {
//   return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
//     .map(function (v) {
//       v = Math.floor(v).toString();
//       return v.length === 1 ? "0" + v : v;
//     })
//     .join(":");
// }

// EXAMPLES
console.log(humanReadable(0)); // "00:00:00"
console.log(humanReadable(3599)); // "00:59:59"
console.log(humanReadable(359999)); // "99:59:59"
