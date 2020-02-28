const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  let totalSaved = startPriceOld
  let monthsSaved = 0
  let leftoverSaved = 0
  let oldPrice = startPriceOld
  let newPrice = startPriceNew
  let newDecreasePercent = percentLossByMonth
  
  while (totalSaved < newPrice) {
    monthsSaved += 1

    if (monthsSaved % 2 === 0) {
      newDecreasePercent += 0.5
    }

    totalSaved += savingperMonth - (oldPrice * newDecreasePercent/100)
    newPrice -= newPrice * newDecreasePercent/100
    leftoverSaved = totalSaved - newPrice
  }
  
  return [monthsSaved, newDecreasePercent, leftoverSaved.toFixed(0) * 1]
}

nbMonths(2000, 8000, 1000, 1.5)