const indexEqualsValue = a => {
  for (let i = 0; i < a.length; i++) {
    if(a[i] === i) {
      return i
    }
  }
  return -1;
}