// Are You Playing Banjo?

// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

// Names given are always valid strings.

// SOLUTIONS
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

// Examples
console.log(areYouPlayingBanjo("Rembo")); // "Rembo plays banjo"
console.log(areYouPlayingBanjo("rembo")); // "rembo plays banjo"
console.log(areYouPlayingBanjo("Tom")); // "Tom does not play banjo"
