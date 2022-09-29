const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieInfo = data.species.find((specie) => specie.name === animal);
  return specieInfo.residents.every((residente) => residente.age >= age);
}

module.exports = getAnimalsOlderThan;
