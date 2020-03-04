function findShort(s){
  let wordArray = s.split(" ")
  let shortWord = wordArray[0].length
  for (let i = 0; i < wordArray.length; i++) {
    if (shortWord > wordArray[i].length) {
      shortWord = wordArray[i].length
    }
  }
  return shortWord
}

findShort("turns ou random test cases are easier than writing out basic ones")