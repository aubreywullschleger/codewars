function persistence(num) {
  if (num < 10) {
    return 0
  }
  
  let stringNum = String(num)
  let remainingOps = stringNum.length
  let ops = 0
  
  while (remainingOps !== 1) {
    let newNum = stringNum.split("").reduce((acc, cv) => acc * cv, 1).toString()
    stringNum = newNum
    remainingOps = newNum.length
    ops++
  }
  
  return ops
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))