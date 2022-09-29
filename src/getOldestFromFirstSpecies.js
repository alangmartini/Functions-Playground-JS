const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((employeeU) => employeeU.id === id);
  const firstResponsibleId = employee.responsibleFor[0];
  const firstResponsableSpecies = data.species.find((specie) =>
    specie.id === firstResponsibleId);
  const animal = firstResponsableSpecies.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) return curr;
    return acc;
  });
  const { name, sex, age } = animal;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies(data.employees[0].id));

module.exports = getOldestFromFirstSpecies;
