function maxNumber(n){
  let stringNum = n.toString().split("")
  return parseInt(stringNum.sort((a,b) => b - a).join(""))
}