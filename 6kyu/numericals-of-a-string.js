function numericals(s){
  let string = ""
  let characterOccurences = {}
  
  for(let i in s) {
    if(characterOccurences.hasOwnProperty(s[i])){
      characterOccurences[`${s[i]}`] += 1
      string += characterOccurences[`${s[i]}`]
    } else {
      characterOccurences[`${s[i]}`] = 1
      string += 1
    }
  }
  return string
}

numericals("Hello, World! It's me, JomoPipi!")