function infected(s) {
  let continents = s.split("X")
  let totalPopulation = 0
  let infectedCountries = 0
  let infectedPopulation = 0

  for (countries in continents) {
    totalPopulation += continents[countries].length
    if (continents[countries].includes("1")) {
      let infectedCountry = continents[countries].replace(/0/gi, "1")
      infectedCountries += infectedCountry.length
    }
  }
  
  infectedPopulation = (infectedCountries / totalPopulation) * 100;

  if (infectedCountries === 0) {
    infectedPopulation = 0
  }
  
  return infectedPopulation
}

console.log(infected("01000000X000X011X0X")) // 73.33333333333333
console.log(infected("XXXXX")) // 0