const nbYear = (p0, percent, aug, p) => {
  let years = 0
  while (p0 < p) {
    p0 += p0 * percent/100 + aug
    years++
  }
  return years
}