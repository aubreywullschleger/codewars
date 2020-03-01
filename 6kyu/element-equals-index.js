const indexEqualsValue = a => {
  for (let i = 0; i < a.length; i++) {
    if(a[i] === i) {
      return i
    }
  }
  return -1;
}

// const indexEqualsValue = a =>{
//   let low = 0
//   let high = a.length - 1
//   let mid = Math.round((low + high)/ 2)

//   while (mid !== a[mid]) {
//     if (high >= low) {
//       if (mid > a[mid]) { 
//         low = mid + 1
//         high = high
//         mid = Math.round((low + high)/ 2)  
//       } else {
//         low = low
//         high = mid - 1
//         mid = Math.round((low + high)/ 2)
//       }
//     } else if (high === mid || low === mid) {
//       return -1
//     }
//   }
//   if (mid === a[mid]) {
//     for (let i = 0; i < mid; i++) {
//       if(a[i] === i) {
//         return i
//       }
//     }
//     return a[mid]
//   }
// }

indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]) // 1