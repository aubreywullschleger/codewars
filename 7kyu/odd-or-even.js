function oddOrEven(array) {
  return array.length < 1 || array.reduce((total, currentNum) => total + currentNum) % 2 === 0 ? "even" : "odd"
}