// function findShort(s){
//   let wordArray = s.split(" ")
//   let shortWord = wordArray[0].length
//   for (let i = 0; i < wordArray.length; i++) {
//     if (shortWord > wordArray[i].length) {
//       shortWord = wordArray[i].length
//     }
//   }
//   return shortWord
// }

// refactor
// Math.min returns the min value number passed to it with comma separated values
const findShort = s => Math.min(...s.split(" ").map(word => word.length))

findShort("turns ou random test cases are easier than writing out basic ones")