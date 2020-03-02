const menFromBoys = arr => {
  let men = []
  let boys = []
  for(num in arr) {
    if(arr[num] % 2 === 0) {
      men.push(arr[num])
    } else {
      boys.push(arr[num])
    }
  }
  men.sort((a, b) => a - b)
  boys.sort((a, b) => b - a)
  return [...new Set(men), ...new Set(boys)]
}