function grabscrab(anagram, dictionary) {
  let sortedAnagram = anagram.split("").sort().join("")
  return dictionary.filter(word => word.split("").sort().join("") === sortedAnagram)
}