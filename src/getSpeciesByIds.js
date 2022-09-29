const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  if (args.length < 1) return [];
  return args.map((item) => data.species.find((specie) => specie.id === item));
}

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
getSpeciesByIds([lionId]);
module.exports = getSpeciesByIds;
