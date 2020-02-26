const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(ages.length - 2)

twoOldestAges([1, 2, 10, 8])