const data = require('../data/zoo_data');

function getAnimalsOfAZone(zone) {
  const speciesOfZone = data.species.filter((spe) =>
    spe.location === zone);
  return speciesOfZone;
}

function getResidentsOfSpecies(species) {
  const obj = {
    species: species.name,
    all: [],
    male: [],
    female: [],
  };
  species.residents.forEach((res) => {
    obj.all.push(res.name);
    if (res.sex === 'male') obj.male.push(res.name);
    if (res.sex === 'female') obj.female.push(res.name);
  });
  return obj;
}

function noParam(obj) {
  Object.keys(obj).forEach((zone) => {
    const speciesOfZone = getAnimalsOfAZone(zone);
    obj[zone] = [];
    speciesOfZone.forEach((spe) => obj[zone].push(spe.name));
  });
  console.log(obj);
}

function sortObj(obj) {
  Object.keys(obj).forEach((zone) => {
    obj[zone].forEach((animal) => {
      animal[Object.keys(animal)[0]]
        .sort((a, b) => a.localeCompare(b));
    });
  });
  return obj;
}

function getAnimalMap(options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  if (!options) return noParam(obj);
  const { sex, sorted, includeNames } = options;
  Object.keys(obj).forEach((zone) => {
    const speciesOfZone = getAnimalsOfAZone(zone);
    speciesOfZone.forEach((spe) => {
      const speData = getResidentsOfSpecies(spe);
      const names = {};
      if (sex === 'male') names[speData.species] = speData.male;
      if (sex === 'female') names[speData.species] = speData.female;
      if (!sex) names[speData.species] = speData.all;
      obj[zone].push(names);
    });
  });
  if (sorted) sortObj(obj);
  return obj;
}

console.log(sortObj(getAnimalMap()));

module.exports = getAnimalMap;
