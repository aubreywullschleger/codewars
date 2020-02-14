const populationCounter = (accumulator, countries) => accumulator + countries.length

function infected(s) {
  let continents = s.split("X")
  let totalPopulation = continents.reduce(populationCounter, 0)
  let infectedCountries = continents.filter(countries => parseInt(countries, 2) > 0)
  let infectedPopulation = infectedCountries.reduce(populationCounter, 0)
  
  return infectedPopulation === 0 ? 0 : (infectedPopulation / totalPopulation) * 100
}


console.log(infected("01000000X000X011X0X")) // 73.33333333333333
console.log(infected("XXXXX")) // 0