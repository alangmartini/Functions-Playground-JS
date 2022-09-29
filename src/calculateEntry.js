const data = require('../data/zoo_data');

function getRange(age) {
  let ageRange = '';
  switch (true) {
  case age < 18:
    ageRange = 'child';
    break;
  case age >= 18 && age < 50:
    ageRange = 'adult';
    break;
  default:
    ageRange = 'senior';
  }
  return ageRange;
}

function countEntrants(entrants) {
  const entriesNum = {};
  entrants.forEach((person) => {
    const { age } = person;
    const ageRange = getRange(age);
    if (Object.keys(entriesNum).includes(ageRange)) {
      entriesNum[ageRange] += 1;
    } else {
      entriesNum[ageRange] = 1;
    }
  });
  return entriesNum;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrances = countEntrants((entrants));
  return Object.keys(entrances).reduce((acc, curr) =>
    acc + ((entrances[curr] * data.prices[curr])), 0);
}

module.exports = { calculateEntry, countEntrants };
