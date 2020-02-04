function removeDuplicateWords (s) {
  let wordsArray = s.split(" ")
  let foundWords = {}
  let removedDuplicateWords = ""
  wordsArray.forEach(word => {
    if(foundWords[word]) {
      foundWords[word] += 1
    } else {
      foundWords[word] = 1
    }
  })
  for (let key in foundWords) {
    removedDuplicateWords += `${key} `
  }
  return removedDuplicateWords.trim()
}