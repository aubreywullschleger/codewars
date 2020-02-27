function getGrowth(...args){
  let argsCopy = args
  let i = 0
  let growth = []
  let growthMessage = ""
  while (i < argsCopy.length) {
    growth.push({
      num: argsCopy[i],
      diff: argsCopy[i] - argsCopy[i-1] || 0,
      diffPercent: Math.round(100 * (argsCopy[i] - argsCopy[i-1])/argsCopy[i-1]) || 0
    })
    if (growth[i].diff >= 0) {
      growth[i].diff = `+${growth[i].diff}`
    }
    if (growth[i].diffPercent >= 0) {
      growth[i].diffPercent = `+${growth[i].diffPercent}`
    }
    growthMessage += `${growth[i].num} (${growth[i].diff}, ${growth[i].diffPercent}%), `
    i += 1
  }
  return growthMessage.substring(0, growthMessage.length - 2)
}

// getGrowth(1, 2, 3)
getGrowth(100, 50, 10)