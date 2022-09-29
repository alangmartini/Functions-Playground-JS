const data = require('../data/zoo_data');

// Returns an object in which every key/value
// Is an animal name and how many residents it have
const notAnimal = () => {
  const obj = {};
  data.species.forEach((especie) => { obj[especie.name] = especie.residents.length; });
  return obj;
};

// If sex is parameter:
// returns an object of type { speciesName: amountOfGivenSexInZoo}
// Else { speciesName: allResidentsAmount}
function countAnimals(animal) {
  if (!animal) return notAnimal();
  const obj = {};
  const { specie, sex } = animal;
  // Find species with animal name
  const especiesData = data.species.find((especie) => especie.name === specie);
  console.log(especiesData)
  // If sex is passed, returns given sex amount of animals
  if (sex !== undefined) {
    const residentsOfSex = especiesData.residents.filter((residente) => residente.sex === sex);
    return residentsOfSex.length;
  // Else, return all species residents amount.
  }
  return especiesData.residents.length;

}

module.exports = countAnimals;
