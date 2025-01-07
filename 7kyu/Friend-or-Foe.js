// Friend or Foe?

// DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []

// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

// SOLUTIONS:
function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

// 2
// function friend(friends) {
//   const arrayFriends = [];

//   for (const friend of friends) {
//     if (friend.length === 4) {
//       arrayFriends.push(friend);
//     }
//   }

//   return arrayFriends;
// }

// EXAMPLES:
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // ["Ryan", "Yous"]
console.log(friend(["Peter", "Stephen", "Joe"])); // []
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
); // ["Jimm", "Cari", "aret"]
