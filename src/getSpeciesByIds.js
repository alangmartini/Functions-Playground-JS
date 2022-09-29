const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  if (args.length < 1) return [];
  return args.map((item) => data.species.find((specie) => specie.id === item));
}

module.exports = getSpeciesByIds;
