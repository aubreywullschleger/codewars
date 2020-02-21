const number = array => !array.length ? [] : array.map((el, idx) => `${idx + 1}: ${el}`)

console.log(number(["a", "b", "c"]))
console.log(number([]))